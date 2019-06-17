import React from 'react';
import emptyBeer from '../empty-beer.svg';
import fullBeer from '../filled-beer.svg';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onRatingSelected = this.onRatingSelected.bind(this);
    this.state = {
      isOpen: false,
      rating: 0
    }
  }
  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  onRatingSelected(rating) {
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
            return <img key={ratingNumber} className={`product__rating-icon product__rating-icon--${isEmpty ? 'empty': 'full' }`} onClick={() => { this.onRatingSelected(ratingNumber) }} src={isEmpty ? emptyBeer : fullBeer } />
          })}
        </span>
      </div>
      <div>
      </div>
      {isOpen && <div className="product__extra">

        {colour && <span>{colour}</span>}

        {notes}
      </div>}
    </div>)
  }
}


export default class extends React.Component {
  render() {
    const { data } = this.props;
    const items = data.list.map((listitem, key) => <Item key={key} {...listitem} />);
    return (
      <section>
        <h1 className="brewery__title">{data.name}</h1>
        <p className="brewery__desc">{data.description}</p>
        <p className="instructions">Tap the beer name to see more. Tap the beer icon to rate each beer.</p>
        <div className="brewery__items">
          {items}
        </div>
      </section>
    );
  }
}