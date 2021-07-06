import {useSelector, useDispatch} from 'react-redux';

const SomeNestedChildComponent = () => {
    // const counter = useSelector((state) => state.counterValue); або 2й варіант одразу деструктуризувати об'єкт
    const counter = useSelector(({counterValue}) => counterValue);
    //console.log(counter);

    return (
        <div>
            SOMETHING
            <h1> {counter}</h1>

        </div>
    )
}

const SomeChildComponent = () => {
    return (<SomeNestedChildComponent/>)
}

export default function App() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {
                dispatch({type: 'INC'})
            }
            }>inc
            </button>
            <SomeChildComponent/>
        </div>
    );
}


