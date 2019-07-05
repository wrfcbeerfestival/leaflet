import React, { Component } from 'react';
import beer from '../beer-picker.js';
import cider from '../cider-picker.js';
import { Item } from '../Pages/Brewery';
import { getProductById, getBreweryName } from '../breweryDetails';
import { Link } from 'react-router-dom';
const Question = ({ question, answerQuestion, showProduct }) => {
  return (
    <div>
      <h2 className="title">{question.title}</h2>
      {question.answers.map((answer) => {
        return <button key={answer.nextId || answer.productId} className="picker__answer" onClick={() => { answer.breweryId ? showProduct(answer.breweryId, answer.productId) : answerQuestion(answer.nextId); }}>{answer.title}</button>
      })}
    </div>
  )
}

const Answer = ({ answer, onBackClick }) => {
  return (
    <div>
      <h2 className="title">{answer.title}</h2>
      <p className="picker__description paragraph">{answer.description}</p>
    </div>
  )
}

const firstPageState = {
  type: 'QUESTION',
  title: 'Which would you prefer?',
  answers: [{
    title: 'Beer',
    nextId: 'beerStart'
  }, {
    title: 'Cider (Still in development)',
    nextId: 'ciderStart'
  }]
}
class Picker extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentView: firstPageState,
      beercider: {
        ...cider,
        ...beer
      },
      backLinkHistory: []
    }
    this.onAnswerClick = this.onAnswerClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.onStartAgain = this.onStartAgain.bind(this);
    this.showProduct = this.showProduct.bind(this);
  }

  onAnswerClick(id) {
    window.gtag('event', 'answer_click', {
      'event_category': 'answer',
      'event_label': id
    });
    if (id === 'beerStart' || id === 'ciderStart') {
      this.setState({ type: id === 'beerStart' ? 'beer' : 'cider' });
    }
    this.setState({
      id,
      currentView: this.state.beercider[id],
      backLinkHistory: [...this.state.backLinkHistory, id]
    })
    window.gtag('event', 'picker page', {
      'event_category': this.state.beercider[id].type,
      'event_label': this.state.beercider[id].title
    });
  }

  showProduct(breweryId, productId) {
    this.setState({
      currentView: {
        type: 'PRODUCT',
        breweryId,
        name: getBreweryName(breweryId),
        product: getProductById(breweryId, productId)
      },
      backLinkHistory: [...this.state.backLinkHistory, this.state.id]
    })
  }

  onBackClick() {
    window.gtag('event', 'back_click', { 'event_category': 'back', 'event_label': this.state.currentView.title });
    const backLinkHistoryClone = [...this.state.backLinkHistory];
    backLinkHistoryClone.pop();
    const lastId = backLinkHistoryClone[backLinkHistoryClone.length - 1];
    this.setState({
      currentView: lastId ? this.state.beercider[lastId] : firstPageState,
      backLinkHistory: backLinkHistoryClone
    })
  }

  onStartAgain() {
    window.gtag('event', 'start_again_click');
    this.setState({
      currentView: firstPageState,
      backLinkHistory: []
    })
  }

  render() {
    return (
      <div className="picker">
        {this.state.currentView.type === 'PRODUCT' && <div>
          <h2 className="subheading bottom-border">Then you'll like...</h2>
          <h3 className="title">{this.state.currentView.name}</h3>
          <Item {...this.state.currentView.product} isOpen={true} type={this.state.type} id={this.state.currentView.breweryId} />
          <div>
            <div className="back__button back__button--link"><Link to="/brewery/beer/all"><button className="next__button next__button--link">VIEW ALL BEERS</button></Link></div>
            <div className="back__button back__button--link"><Link to="/brewery/cider/all"><button className="next__button next__button--link">VIEW ALL CIDERS</button></Link></div>
          </div>
        </div>}
        {this.state.currentView.type === 'QUESTION' && <Question question={this.state.currentView} answerQuestion={this.onAnswerClick} showProduct={this.showProduct} />}
        {this.state.currentView.type === 'ANSWER' && <Answer answer={this.state.currentView} />}
        {this.state.backLinkHistory.length > 0 ? <div>
          <div className="back__button" onClick={() => { this.onBackClick() }}><button className="next__button">BACK</button></div>
          <div className="back__button" onClick={() => { this.onStartAgain() }}><button className="next__button">START AGAIN</button></div>
        </div> : null}
      </div>
    );
  }
}

export default Picker;