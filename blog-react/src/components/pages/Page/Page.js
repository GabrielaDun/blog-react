import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import styles from './Page.module.scss'
import { Link } from 'react-router-dom';

const Page = () => {
    const { id } = useParams();
    console.log(id);
    const listData = useSelector(state => getPostsById(state, id));
    console.log(listData);
    return (
        <div className={styles.page}>
            <div >
                <h2>{listData.title}</h2>
                <p><span>Author: </span>{listData.author}</p>
                <p><span>Published: </span>{listData.publishedDate}</p>
                <p>{listData.content}</p>
            </div>
            <div className={styles.subpage}>
                <Link className={styles.button} to={'/post/edit/'+ id } >Edit</Link>
                <Link className={styles.delate} to={'/post/edit/' + id}>Delate</Link>
            </div>

        </div>
    )
}

export default Page;