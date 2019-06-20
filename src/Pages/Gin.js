import React from 'react';
import FilledGin from '../filled-gin.svg';
import EmptyGin from '../empty-gin.svg';
import { setRating, getRating, setNotes, getNotes } from '../localstorage';
import { getGinDistills } from '../breweryDetails';
import { getImage } from '../image';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onRatingSelected = this.onRatingSelected.bind(this);
    this.state = {
      rating: getRating(this.props.id, this.props.name),
    }
  }

  onRatingSelected(rating) {
    setRating(this.props.id, this.props.name, rating);
    this.setState({ rating })
  }

  render() {
    const { image, notes } = this.props;
    const { rating } = this.state;
    return (<div className="product product--gin">
      <div className="product__header">
        <img src={getImage(image)} />
      </div>
      <div className="product__extra">
        <div>{notes}</div>
        <div className="product__rating">
          {[1, 2, 3, 4, 5].map((ratingNumber) => {
            const isEmpty = ratingNumber > rating;
            const icon = isEmpty ? EmptyGin : FilledGin;
            return <img key={ratingNumber} className={`product__rating-icon product__rating-icon--${isEmpty ? 'empty' : 'full'}`} onClick={() => { this.onRatingSelected(ratingNumber) }} src={icon} />
          })}
        </div>
      </div>
      <div>
      </div>
    </div>)
  }
}


export default class extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: getGinDistills()
    }
    this.onDescriptionClick = this.onDescriptionClick.bind(this);
  }
  
  onDescriptionClick() {
    this.setState({ hideDescription: !this.state.hideDescription })
  }

  render() {
    const list = Object.keys(this.state.data).map((id) => {
      const distill = this.state.data[id];
      const items = distill.list.map((listitem, itemKey) => <Item key={itemKey} {...listitem} id={id} />);
      return (<section>
        <p className="brewery__desc" >{distill.description}</p>
        <div className="brewery__items">
          {items}
        </div>
      </section>);
    })
    return (
      <div>
        <p className="instructions">Tap the distillery to see more information. Tap the gin glasses to rate each gin</p>
        { list }
      </div>  
    )
  }
}