import { legacy_createStore as createStore,applyMiddleware, compose} from "redux";

import createSagaMiddleware from 'redux-saga';
import rootReducer from "./rootReducer";
import postSaga from "./postSaga";
 

const sagaMiddleware=createSagaMiddleware()
const store = compose(
    applyMiddleware(sagaMiddleware ),
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )(createStore)(rootReducer);

console.log(store.getState()) 

sagaMiddleware.run(postSaga)
// const store=createStore(rootReducer)

export default store

