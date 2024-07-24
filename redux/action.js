import {  ADD_CARD, POST_CARDS, POST_CARDS_SEARCH, SET_ADD_CARD, SET_DELETE_CARD, SET_SINGLE_CARD_ID} from "./constant"

export const post_cards=()=>{
    return{
        type: POST_CARDS,
        
    }
}
export const singleCardId=(id )=>{
    return{
        type: SET_SINGLE_CARD_ID,
        id
    
    }
}

export const searchCards=(query )=>{
    return{
        type: POST_CARDS_SEARCH,
        query
    
    }
}

export const deleteSingleCard=(id)=>{
    return{
        type: SET_DELETE_CARD,
        id
    
    }
}

export const addPost=(data)=>{
    return{
        type: SET_ADD_CARD,
        data
        
    
    }
}






