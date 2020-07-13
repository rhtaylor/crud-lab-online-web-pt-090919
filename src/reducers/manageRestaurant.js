
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
    restaurants: [], 
    reviews: []

}, action) {  
    let {restaurants} = action 
    const resObj = { 
        text: restaurants, 
        id: cuid()
    }
    let {type} = action  
   debugger
   switch(type){
       case "ADD_RESTAURANT": 
           return { ...state, restaurants: [...state.restaurants.concat(resObj)]};
       case 'ADD_REVIEW': 
       return {}
       default: 
       return {...state}
   }

}
