import { combineReducers } from "redux";
import { cardData } from "./reducer";
import { card } from "./cardReducer";


 

export default combineReducers({
    cardData,
    card,
   
   
})