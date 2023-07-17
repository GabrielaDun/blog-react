import Button from '../Button/Button';
import styles from './AddPostForm.module.scss';
import { useState } from 'react';

const AddPostForm = () => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [published, setPublished] = useState('');
    const [shortDescription, setShortDescription] = useState('');
    const [mainContent, setMainConetnt] = useState ('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(title, author, published, shortDescription, mainContent);
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
        <input value= {published} onChange={e => setPublished(e.target.value)} type="date" className="date" />
        <p>Short description</p>
        <textarea value = {shortDescription} onChange={e => setShortDescription(e.target.value)}id="exampleFormControlTextarea1"  className="description" placeholder=" Leave a short summery here"rows="1"></textarea>
        <p>Main contenet</p>
        <textarea value={mainContent} onChange={e => setMainConetnt(e.target.value)} className="content" placeholder=" Write your blog here" id="exampleFormControlTextarea1" rows="3"></textarea>
        <Button>Add Post</Button>
    </form>
    )
}

export default AddPostForm;