import {useSelector, useDispatch} from 'react-redux';

export default function App() {
    const counter = useSelector(({counterValue}) => counterValue);
    const dispatch = useDispatch();

    return (

        <div>
            <button onClick={() => {
                dispatch({
                    type: 'INC'
                })
            }
            }>Add 1
            </button>

            <button onClick={() => {
                dispatch({
                    type: 'DEC'
                })
            }
            }>Minus 1
            </button>

            <input type="number" placeholder="enter a number" id="input"/>

            <button onClick={() => {
                dispatch({
                    type: 'INC-CUSTOM',
                    payload: +document.getElementById('input').value
                })
            }
            }>Add custom
            </button>

            <h1>{counter}</h1>

            <button onClick={() => {
                dispatch({
                    type: 'RESET'
                })
            }
            }>Reset
            </button>
        </div>
    );
}


