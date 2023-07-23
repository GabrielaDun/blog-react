import { React, useState } from "react";
import styles from './PostForm.module.scss';
import Button from '../Button/Button';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useForm } from "react-hook-form";
import { Form} from "react-bootstrap";
import { useSelector } from "react-redux";
import { getCategories } from '../../../redux/categoriesRedux';

const PostForm = ({action, actionText, ...props}) => {

    const { register, handleSubmit: validate, formState: { errors } } = useForm();

    const [title, setTitle] = useState(props.title || '');
    const [author, setAuthor] = useState(props.author ||'');
    const [category, setCategory] = useState(props.category ||'');
    const [publishedDate, setPublished] = useState(props.publishedDate ||'');
    const [shortDescription, setShortDescription] = useState(props.shortDescription ||'');
    const [content, setMainConetnt] = useState (props.content ||'');
    const [dateError, setDateError] = useState(false);
    const [contentError, setContentError] = useState(false);

    const categories = useSelector(getCategories);
    console.log(categories);

    const categoriesTwo = useSelector((state) => getCategories(state));
    console.log(categoriesTwo);

    const handleSubmit = () => {
        setContentError(!content)
        setDateError(!publishedDate)
        if(content && publishedDate){
            action({title, author, publishedDate, shortDescription, content})
        }
    }

    return (
    <form className={styles.root} onSubmit={validate(handleSubmit)}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            {...register("title", { required: true, minLength: 3 })}
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text" placeholder="Enter title"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">This field requires at least 3 characters.</small>}
        </Form.Group >
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author</Form.Label>
            <Form.Control
                {...register("author", {required: true, minLength: 3})}
                value={author} 
                onChange ={e => setAuthor(e.target.value)} 
                type="text" 
                placeholder=" Enter author" 
            />
            {errors.author&&<small className="d-block form-text text-danger mt-2">This field requires at least 3 characters.</small>}
        </Form.Group>
        <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
                {...register("category", {required: true})}
                value={category}
                onChange={e => setCategory(e.target.value)}
                type="dropdown"
                as="select"
                placeholder="Enter title"
            >
                {categories?.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </Form.Control>
        </Form.Group>
            <p>Published</p>
            <DatePicker
                value={publishedDate} 
                selected={publishedDate}
                onChange={(date) => setPublished(date)} 
                type="date" 
                className="date" 
            />
            {dateError && <small className="d-block form-text text-danger mt-2">Date can't be empty</small>}
        <Form.Group>
            <Form.Label>Short description</Form.Label>
            <Form.Control
                {...register("description", {required: true, minLength: 20})}
                value={shortDescription} 
                onChange={e => setShortDescription(e.target.value)}
                className="textarea" 
                placeholder=" Leave a short summery here"
                rows="1" 
            />
            {errors.author&&<small className="d-block form-text text-danger mt-2">This field requires at least 20 characters.</small>}
        </Form.Group>
            
        <p>Main contenet</p>
        <ReactQuill 
            value={content} 
            theme="snow" 
            onChange={setMainConetnt} 
            className="textarea" 
            placeholder=" Write your blog here" 
            rows="3" 
        />
        {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        <Button>{actionText}</Button> 
    </form>
    )
}


export default PostForm;