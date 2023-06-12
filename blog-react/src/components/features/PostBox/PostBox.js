import { Link } from 'react-router-dom';
import styles from  './PostBox.module.scss'

const PostBox = (props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <img
                className={styles.image}
                alt="Triathlon Guide"
                src={`${process.env.PUBLIC_URL}/images/${props.image}.jpg`} />
            <p>Author: {props.author}</p>
            <p>Published: {props.publishedDate}</p>
            <p>{props.shortDescription}</p>
            <Link to={'/post/'+ props.id}>Read more</Link>
        </div>
    )

}

export default PostBox;