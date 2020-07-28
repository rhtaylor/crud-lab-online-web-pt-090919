import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  makeReviews=()=>{
    return this.props.reviews.length > 0 ? this.props.reviews.map(review=> <Review review={review} />) : <li>{this.props.reviews}</li> 
  }
  
  render() {
    return (
      <ul>
        {this.makeReviews()}
      </ul>
    );
  }
};

export default Reviews;