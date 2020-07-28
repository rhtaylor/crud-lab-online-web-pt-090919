import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component { 
    state={
      review: '', 
      id: this.props.restaurant_id
    }
    handleChange=(e)=>{
      e.preventDefault;  
      debugger
      this.setState({review: e.target.value})
    } 

    handleSubmit=(e)=>{
      e.preventDefault()
      debugger 
    }
  render() {
    debugger
    return (
      <div>
       <form onSubmit={e=>this.handleSubmit(e)}>
    <label>Review for {this.props.restaurant}</label>
         <input type="text" value={this.state.review}  
          onChange={(e)=>this.handleChange(e)}
         />
          <input type="submit" />
       </form>
      </div>
    );
  }
};

export default ReviewInput;
