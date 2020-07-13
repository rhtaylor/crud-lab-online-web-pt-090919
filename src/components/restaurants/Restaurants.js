import React, { Component } from 'react';
import Restaurant from './Restaurant' 

class Restaurants extends Component {
  
  makeTheDish =()=>{  
    debugger
    if(this.props.res.length > 0){ 
  return  this.props.res.map((r,i) => <li key={i}><Restaurant restaurant={r} /></li>)   
    } else { return <li>COMMING SOONA</li>}
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