import { useState } from "react";
import styles from './PostForm.module.scss';
import Button from '../Button/Button';

const PostForm = ({action, actionText, ...props}) => {


    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author ||'');
    const [publishedDate, setPublished] = useState(props.publishedDate || '');
    const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
    const [content, setMainConetnt] = useState (props.content || '');

    const handleSubmit = e => {
        e.preventDefault();
        action({title, author, publishedDate, shortDescription, content})
        setTitle('');
        setAuthor('');
        setMainConetnt('');
        setShortDescription('');
        setPublished('');
        console.log(title, author, publishedDate, shortDescription, content);
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
        <Button>{actionText}</Button>
    </form>
    )
}


export default PostForm;