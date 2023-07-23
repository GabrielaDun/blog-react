///import { Link } from 'react-router-dom';
import styles from  './PostBox.module.scss';
import Button from '../../common/Button/Button';
import { Link} from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';



const PostBox = (props) => {
    console.log(props);
    return (
        <div>
            <h4>{props.title}</h4>
            <img
                className={styles.image}
                alt="Triathlon Guide"
                src={`${process.env.PUBLIC_URL}/images/${props.image}.jpg`} />
            <p><b>Author: </b>{props.author}</p>
            <p><b>Published: </b>{dateToStr(props.publishedDate)}</p>
            <p><b>Category: </b> {props.category}</p>
            <p>{props.shortDescription}</p>
            <Link className={styles.button} to={'/post/'+ props.id} ><Button>Read more</Button></Link>
        </div>
    )

}

export default PostBox;