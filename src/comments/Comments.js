import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Comment from "../comment/Comment";


export default function Comments() {
    const comments = useSelector((state) => state.comments);
    const dispatch = useDispatch();

    const fetchComments = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments');
        const commentsData = await response.json();

        dispatch({
            type: 'SET_COMMENTS',
            payload: commentsData
        })
    }

    useEffect(() => {
        fetchComments()
    })

    return (
        <div>
            {comments.map(value => <Comment key={value.id} item={value}/>)}
        </div>
    )
}
