import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import User from '../user/User';

export default function Users() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const fetchUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData = await response.json();

        dispatch({
            type: 'SET_USERS',
            payload: usersData
        })
    }

    useEffect(() => {
        fetchUsers()
    }, [])
    return (
        <div>
            {users.map(value => <User key={value.id} item={value}/>)}
        </div>
    )
}
