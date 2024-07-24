import { DELETE_CARD, POST_CARDS,POST_CARDS_SEARCH,SET_ADD_CARD,SET_DELETE_CARD,
    SET_POST_CARDS, SET_SINGLE_CARD_ID, SINGLE_CARD} from "./constant"
import { takeEvery, put } from 'redux-saga/effects'

function * getPost(){
    
    let data=yield fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
          },
    })
    data = yield  data.json()
    console.log("action is called posts",data)
    yield put({type:SET_POST_CARDS, data})
}

function * getSearchCard(action){
console.log(action,'searchvalue')
    let data=yield fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?q=${action.query}`)
    data=yield data.json()
    console.log("action is called ",data)
    yield put ({type:SET_POST_CARDS, data})
}

function * getCardId(action){
    let data=yield fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${action.id}`,{
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
          },
    })
    data=yield data.json()
    // console.log("action is called ",data)
    yield put ({type:SINGLE_CARD, data})
}

function * deleteCard(action){
    let data=yield fetch(`${process.env.NEXT_PUBLIC_API_URL}/post/${action.id}`,{
        method:"DELETE",
        headers: {
            'Content-Type': 'application/json',
          },
    })
    data=yield data.json()
    // console.log("action is called ",data)
    yield put ({type:DELETE_CARD, data})
}


function * addCard(action){
    const data=action.data
   console.log(data,'data')
    let carddata=yield fetch(`${process.env.NEXT_PUBLIC_API_URL}/addPost`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
          },
          body:JSON.stringify(data)
    })
    
    // carddata=yield data
    // console.log("action is called card ",carddata)
    // yield put ({type:SET_POST_CARDS, carddata})
}




function* postSaga(){
    yield takeEvery(POST_CARDS,getPost)
    yield takeEvery(SET_SINGLE_CARD_ID,getCardId)
    yield takeEvery(POST_CARDS_SEARCH,getSearchCard)
    yield takeEvery(SET_DELETE_CARD,deleteCard)
    yield takeEvery(SET_ADD_CARD,addCard)
   
  
} 

export default postSaga