import { addPost } from '../../../redux/postsRedux';
import PostForm from '../PostForm/PostForm';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AddPostForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = post => {
        dispatch(addPost(post));
        navigate('/')
    }

    return (
    <PostForm action={handleSubmit} actionText='Add Post'/>
    )
}

export default AddPostForm;