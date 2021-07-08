import {createStore} from 'redux';

const initialState = {
    users: [],
    posts: [],
    comments: []
}
const setInfoReduser = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_USERS': {
            return ({...state, users: action.payload});
        }
        case 'SET_POSTS': {
            return ({...state, posts: action.payload});
        }
        case 'SET_COMMENTS': {
            return ({...state, comments:action.payload});
        }
        default:
            return state;
    }
}

export const store = createStore(setInfoReduser);