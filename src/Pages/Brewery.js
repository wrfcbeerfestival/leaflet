import React from 'react';
import emptyBeer from '../empty-beer.svg';
import fullBeer from '../filled-beer.svg';
import emptyCider from '../empty-apple.svg';
import fullCider from '../filled-apple.svg';
import { setRating, getRating, setNotes, getNotes } from '../localstorage';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onRatingSelected = this.onRatingSelected.bind(this);
    this.onTextAreaChange = this.onTextAreaChange.bind(this);
    this.state = {
      isOpen: false,
      rating: getRating(this.props.id, this.props.name),
      notes: getNotes(this.props.id, this.props.name)
    }
  }
  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  onTextAreaChange(e) {
    setNotes(this.props.id, this.props.name, e.target.value);
    this.setState({ notes: e.target.value})
  }

  onRatingSelected(rating) {
    setRating(this.props.id, this.props.name, rating);
    this.setState({ rating })
  }

  render() {
    const { name, notes, colour, percent } = this.props;
    const { isOpen, rating } = this.state;
    return (<div className="product">
      <div className="product__header">
        <span className="product__header-title" onClick={() => { this.onClick(); }}>{name}
          {percent && <span>{' - '}{percent}%</span>}
        </span>
        <span className="product__rating">
          {[1, 2, 3, 4, 5].map((ratingNumber) => {
            const isEmpty = ratingNumber > rating;
            let icon = isEmpty ? emptyBeer : fullBeer;
            if (this.props.type === 'cider') {
              icon = isEmpty ? emptyCider : fullCider
            }
            return <img key={ratingNumber} className={`product__rating-icon product__rating-icon--${isEmpty ? 'empty' : 'full'}`} onClick={() => { this.onRatingSelected(ratingNumber) }} src={icon} />
          })}
        </span>
      </div>
      <div>
      </div>
      {isOpen && <div className="product__extra">

        {colour && <span>{colour}</span>}

        {notes}

        <textarea placeholder={`Notes for ${name}`} value={this.state.notes} onChange={ (e) => { this.onTextAreaChange(e)}}  className="product__notes" />
      </div>}
    </div>)
  }
}


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideDescription: props.hideDescription
    }
    this.onDescriptionClick = this.onDescriptionClick.bind(this);
  }

  onDescriptionClick() {
    this.setState({
      hideDescription: !this.state.hideDescription
    })
  }

  render() {
    const { data, type, id, hideInfo } = this.props;
    const { hideDescription } = this.state;
    const items = data.list.map((listitem, key) => <Item key={key} {...listitem} id={id} type={type} />);
    const instructions = type === 'beer' ? 'Tap the beer name to see more. Tap the beer icon to rate each beer' : 'Tap the cider name to see more. Tap the apple icon to rate each cider';
    return (
      <section>
      <h1 className="brewery__title" onClick={() => { this.onDescriptionClick()}}>{data.name}</h1>
        { hideDescription ? null : <p className="brewery__desc" >{data.description}</p> }
        { hideInfo ? null : <p className="instructions">{instructions}</p> }
        <div className="brewery__items">
          {items}
        </div>
      </section>
    );
  }
}