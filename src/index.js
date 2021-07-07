import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    counterValue: 0
}
const counterReduser = (state = initialState, action) => {
    // console.log(state, action)
    switch (action.type) {
        case 'INC': {
            return {...state, counterValue: state.counterValue + 1}
        }
        case 'DEC': {
            return {...state, counterValue: state.counterValue - 1}
        }
        case 'INC-CUSTOM': {
            return {...state, counterValue: state.counterValue + action.payload}
        }
        case 'RESET': {
            return {...state, counterValue: 0}
        }
        default:
            return state;
    }
}


const store = createStore(counterReduser);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

