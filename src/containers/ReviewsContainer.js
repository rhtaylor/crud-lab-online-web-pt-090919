import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurant_id={this.props.restaurant_id} restaurant={this.props.restaurant} />
        <Reviews reviews={this.props.reviews} restaurant_id={this.props.restaurant_id} restaurant={this.props.restaurant} />
      </div>
    )
  }
}
const mstp=(state)=>{
  return{restaurants: state.restaurants, 
         reviews: state.reviews
  }
} 
const mdtp =(dispatch)=>{
  return{addReview: (review)=> dispatch({type: 'ADD_REVIEW', review: review}) 

}
}
export default connect(mstp, mdtp)(ReviewsContainer)
