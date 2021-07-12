import {
    ADD_TODOS,
    LOADING_TRUE,
    LOADING_FALSE,
    PUSH_TODO,
} from '../actionTypes';

export const setLoadingTrue = () => ({type: LOADING_TRUE})
export const setLoadingFalse = () => ({type: LOADING_FALSE})
export const addTodos = (payload) => ({type: ADD_TODOS, payload})
export const pushTodo = (payload) => ({type: PUSH_TODO, payload})