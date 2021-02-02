import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from "react-redux";
const increment =()=>{
    return {
        type: 'INCREMENT'
    }
}
const decrement =()=>{
    return {
        type: 'DECREMENT'
    }
}
const  appStore1 =(response=2,action)=> {
    switch (action.type) {
        case 'INCREMENT':
            return response+1;
        case 'DECREMENT':
            return response-0


    }

}

let store=createStore(appStore1);

store.subscribe(()=>console.log(store.getState()))
    store.dispatch(increment());




ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>

    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export default store;
