import React, { Component } from 'react';
import Restaurant from './Restaurant' 
import cuid from 'cuid';
import ReviewsContainer from '../../containers/ReviewsContainer'
class Restaurants extends Component {
  
  delete =(event)=>{
    event.preventDefault() 
    let id = event.target.id  
    debugger
    this.props.removeRestaurant(id)
    debugger
  }

  makeTheDish =()=>{  
    debugger
    if (this.props.restaurants.length > 0){ 
      return this.props.restaurants.map((r,i) => <Restaurant key={cuid()} delete={this.delete} restaurant={r} />)   } 
    }
  render() {
    return(
      <ul>
       {this.makeTheDish()}
      </ul>
    );
  }
};

export default Restaurants;