import { SINGLE_CARD } from "./constant"



export const card=(data="",action)=>{
    switch(action.type){
        case   SINGLE_CARD:
        
        return action.data
        default:
            return data
    }
}