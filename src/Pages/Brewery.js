import React from 'react';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      isOpen: false
    }
  }
  onClick() {
    this.setState({ isOpen: !this.state.isOpen });
  }
  
  render() {
  const { name, notes, colour, percent } = this.props;
  return (<div className="product">
    <div  onClick={() => { this.onClick(); }} className="product__header">
      <span className="product__header-title">{name}</span>
      {colour && <span>{colour}</span>}
      {percent && <span>{percent}%</span>}
    </div>
    { this.state.isOpen && <div className="product__extra">{notes}</div> }
  </div>)
  }
}


export default class extends React.Component {
  render() {
    const { data} = this.props;
    const items = data.list.map((listitem) => <Item {...listitem} />);
    return (
      <section>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        <div>
          {items}
        </div>
      </section>
    );
  }
}