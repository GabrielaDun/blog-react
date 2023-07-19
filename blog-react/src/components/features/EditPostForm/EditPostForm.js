import { editPost, getPostsById } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Navigate, useParams } from "react-router-dom";

const EditPostForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    console.log(id);

    const pageData = useSelector(state => getPostsById(state, id));
    console.log(pageData);

    const handleSubmit = post => {
        dispatch(editPost({...post, id}));
        navigate('/')
    }
    if (!pageData) return <Navigate to="/" />
    else return (
    <PostForm  
        action={handleSubmit} 
        actionText='Save Edits'
        {...pageData} 
        />
    )
}

export default EditPostForm;