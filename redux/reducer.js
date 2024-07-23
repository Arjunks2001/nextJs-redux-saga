import {SET_POST_CARDS } from "./constant";

export const cardData=(state=[],action)=>{
    switch (action.type) {
      case SET_POST_CARDS:
        console.log('reducer',action)
        return [...(action.data || [])];
      default:
        return state;
    }
    
}