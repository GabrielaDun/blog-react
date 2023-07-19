import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import styles from './Page.module.scss'
import NewModal from '../../features/Modal/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Page = () => {
    const { id } = useParams();
    const listData = useSelector(state => getPostsById(state, id));
    console.log(id);

    if(!listData) return <Navigate to="/" />
    else return (
        <div className={styles.page}>
            <div >
                <h2>{listData.title}</h2>
                <p><span>Author: </span>{listData.author}</p>
                <p><span>Published: </span>{listData.publishedDate}</p>
                <p>{listData.content}</p>
            </div>
            <div className={styles.subpage}>
                <div className={styles.buttons}>
                    <Link to={'/post/edit/'+ id } > <Button variant="primary">Edit</Button></Link>
                    <NewModal id={listData.id}>Delate</NewModal>
                </div>
            </div>
        </div>
    )
}

export default Page;