import { SINGLE_CARD, POST_CARDS } from "./constant"

export const post_cards=(  )=>{
    return{
        type: POST_CARDS,
    }
}
export const singleCard=(data )=>{
    return{
        type: SINGLE_CARD,
        data
    
    }
}




