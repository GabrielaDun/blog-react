import { addPost } from '../../../redux/postsRedux';
import Button from '../Button/Button';
import styles from './AddPostForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddPostForm = () => {

    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [publishedDate, setPublished] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [content, setMainConetnt] = useState ('');

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addPost({title, shortDescription, content, publishedDate, author}))

        console.log(title, author, publishedDate, shortDescription, content);
        setTitle('');
        setAuthor('');
        setMainConetnt('');
        setShortDescription('');
        setPublished('');
    }


    return (
    <form className={styles.root} onSubmit={handleSubmit}>
        <p>Title</p>
        <input value={title} onChange={e => setTitle(e.target.value)} type="title" className="title" placeholder=" Enter title" />
        <p>Author</p>
        <input value = {author} onChange ={e => setAuthor(e.target.value)} type="text" className="author" placeholder=" Enter author" />
        <p>Published</p>
        <input value= {publishedDate} onChange={e => setPublished(e.target.value)} type="date" className="date" />
        <p>Short description</p>
        <textarea value = {shortDescription} onChange={e => setShortDescription(e.target.value)}id="exampleFormControlTextarea1"  className="description" placeholder=" Leave a short summery here"rows="1"></textarea>
        <p>Main contenet</p>
        <textarea value={content} onChange={e => setMainConetnt(e.target.value)} className="content" placeholder=" Write your blog here" id="exampleFormControlTextarea1" rows="3"></textarea>
        <Button>Add Post</Button>
    </form>
    )
}

export default AddPostForm;