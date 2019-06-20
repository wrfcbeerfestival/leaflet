import React, { Component } from 'react';
import beer from '../beer-picker.js';
import cider from '../cider-picker.js';

const Question = ({ question, answerQuestion }) => {
  return (
    <div>
      <h2 className="title">{question.title}</h2>
      {question.answers.map((answer) => {
        return <button key={answer.nextId} className="picker__answer" onClick={() => { answerQuestion(answer.nextId); }}>{answer.title}</button>
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
    title: 'Cider',
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
  }

  onAnswerClick(id) {
    // window.gtag('event', 'answer_click', {
    //   'event_category': 'answer',
    //   'event_label': id
    // });
    // window.dataLayer.push({ 'event': 'answer_click', 'next_page_id': id, 'current_title': this.state.currentView.title });
    this.setState({
      currentView: this.state.beercider[id],
      backLinkHistory: [...this.state.backLinkHistory, id]
    })
    // window.gtag('event', 'page_title', {
    //   'event_category': this.state.beercider[id].type,
    //   'event_label': this.state.beercider[id].title
    // });
  }

  onBackClick() {
    // window.gtag('event', 'back_click', { 'event_category': 'back', 'event_label': this.state.currentView.title });
    const backLinkHistoryClone = [...this.state.backLinkHistory];
    backLinkHistoryClone.pop();
    const lastId = backLinkHistoryClone[backLinkHistoryClone.length - 1];
    this.setState({
      currentView: lastId ? this.state.beercider[lastId] : firstPageState,
      backLinkHistory: backLinkHistoryClone
    })
  }

  onStartAgain() {
    // window.gtag('event', 'start_again_click');
    this.setState({
      currentView: firstPageState,
      backLinkHistory: []
    })
  }

  render() {
    return (
      <div className="picker">
        {this.state.currentView.type === 'QUESTION' && <Question question={this.state.currentView} answerQuestion={this.onAnswerClick} />}
        {this.state.currentView.type === 'ANSWER' && <Answer answer={this.state.currentView} />}
        {this.state.backLinkHistory.length > 0 ? <div> 
          <div className="back__button" onClick={() => { this.onBackClick() }}><button className="App__button">BACK</button></div>
          <div className="back__button" onClick={() => { this.onStartAgain() }}><button className="App__button">START AGAIN</button></div>
        </div> : null }
      </div>
    );
  }
}

export default Picker;