import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import {connect} from 'react-redux' 

class RestaurantsContainer extends Component {

  render() { 
    debugger
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/> 
        <Restaurants removeRestaurant={this.props.removeRestaurant} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}
const mstp =(state)=>{
  return {
          restaurants: state.restaurants
  }
}
 const mdtp =(dispatch)=>{
   return { addRestaurant: (res) => dispatch({ type: "ADD_RESTAURANT", restaurants: res}), 
            removeRestaurant: (id) => dispatch({type: 'DELETE', id: id })
  }
 }

export default connect(mstp, mdtp)(RestaurantsContainer)
