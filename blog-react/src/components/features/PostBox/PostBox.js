///import { Link } from 'react-router-dom';
import styles from  './PostBox.module.scss';
import Button from '../Button/Button';
import { Link} from 'react-router-dom';



const PostBox = (props) => {
    console.log(props);
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
            <Link className={styles.button}to={'/post/'+ props.id}><Button>Read more</Button></Link>
        </div>
    )

}

export default PostBox;