import React, { Component } from 'react';

class RestaurantInput extends Component { 
  constructor(props){ 
    super(props)
  this.state={ restaurant: "" } 
  }
  
  handleChange(e){ 
    debugger 
    let savE = e; 
    let res = e.target.value 
    this.setState({ restaurant: res })
    }
  

  handleSubmit(e){
    e.preventDefault() 
    let savE = e 
    debugger 
               
    this.props.addRestaurant(this.state.restaurant)
    debugger
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)} >
          <input type="text" placeholder="restaurant" id="restaurant" value={this.state.restaurant}
          name="res" onChange={(e)=> this.handleChange(e)} />
          <input type="submit"/>
        </form>
      </div>
    );
  } 

}

export default RestaurantInput;
