import { POST_CARDS,SET_POST_CARDS} from "./constant"
import { takeEvery, put } from 'redux-saga/effects'

function * getPost(){
    let data=yield fetch(process.env.NEXT_PUBLIC_API_URL+"/posts")
    data=yield data.json()
    // console.log("action is called ",data)
    yield put ({type:SET_POST_CARDS, data})
}

function* postSaga(){
    yield takeEvery(POST_CARDS,getPost)
  
} 

export default postSaga