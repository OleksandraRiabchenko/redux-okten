import {useSelector, useDispatch} from 'react-redux';
import {useEffect, useState} from "react";
import React, {Fragment} from 'react';
import {todosReducer} from "./redux/redusers/todos";
import {addTodos, pushTodo, setLoadingFalse, setLoadingTrue} from "./redux/actionCreators";

const CreateTodoForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        if (!title || !description || isLoading) return;

        try {
            setIsLoading(true);
            await onSubmit(title, description)
            setTitle('')
            setDescription('')
        } catch (ev) {
            console.log(ev)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type='text' value={title} onChange={({target: {value}}) => setTitle(value)}
                   placeholder='todo title'/>
            <br/>
            <br/>
            <input type='text' value={description} onChange={({target: {value}}) => setDescription(value)}
                   placeholder='todo description' title/>
            <br/>
            <br/>
            <button type='submit' disabled={!title || !description || isLoading}>create todo</button>
        </form>
    )
}

const Todos = ({todos, isLoading}) => {
    if (isLoading) return <h1>LOADING....</h1>

    return (
        <div>
            {todos.map(todo => (
                <Fragment key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.description}</div>
                    <div>Created at: {new Date(todo.createdAt).toDateString()}</div>
                    <div>Status {todo.completed.toString()}</div>
                    <hr/>
                </Fragment>
            ))}
        </div>
    )
}

export default function App() {

    const {todos, todosLoading} = useSelector(store => store.todosReducer);

    const dispatch = useDispatch();

    const fetchTodos = async (ev) => {
        try {
            dispatch(setLoadingTrue())
            const resp = await fetch('http://localhost:8888/get-todos');
            const data = await resp.json();

            dispatch(addTodos(data))
        } catch (ev) {
            console.log(ev);
        } finally {
            dispatch(setLoadingFalse())
        }
    }
    useEffect(() => {
        fetchTodos()
    }, [])

    const onTodoCreate = async (title, description) => {
        if (!title || !description) return;

        console.log(JSON.stringify({title, description}))

        const resp = await fetch('http://localhost:8888/create-todo', {
            method: 'POST',
            body: JSON.stringify({title, description}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        //fetchTodos() перемальовує весь список, всю сторінку, 2й спосіб:
        dispatch(pushTodo(data))
        console.log(data, 'onTodoCreate')
    }

    return (
        <div>
            <CreateTodoForm onSubmit={onTodoCreate}/>
            <Todos todos={todos} isLoading={todosLoading}/>
        </div>
    );
}


