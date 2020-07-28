import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {


  render() { 
    debugger
    const { text, id } = this.props.restaurant;

    return (
      <div>
        <li id={id} >
          {text}
          <button onClick={(event)=> this.props.delete(event)} 
          id={id}
          > X </button>
          <ReviewsContainer restaurant={text} restaurant_id={id} />
        </li>
      </div>
    );
  }
};

export default Restaurant;
