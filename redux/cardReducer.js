import { SINGLE_CARD } from "./constant"


export const card=(data="",action)=>{
    switch(action.type){
        case   SINGLE_CARD:
            console.log('action',action)
        return action.data
        default:
            return data
    }
}