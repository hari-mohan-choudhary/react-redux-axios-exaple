import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduce from './reducers/index'
import App from './App';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';
const middleware = [ thunk ];
//let rootReducer = combineReducers({
//  reduce
//})

let store = createStore(reduce, applyMiddleware(...middleware))

ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
