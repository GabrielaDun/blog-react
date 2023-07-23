import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import styles from './Page.module.scss'
import NewModal from '../../common/Modal/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr';

const Page = () => {
    const { id } = useParams();
    const listData = useSelector(state => getPostsById(state, id));
    console.log(id);

    if(!listData) return <Navigate to="/" />
    else return (
        <div className={styles.page}>
            <div >
                <h2>{listData.title}</h2>
                <p><b>Author: </b>{listData.author}</p>
                <p><b>Published: </b>{dateToStr(listData.publishedDate)}</p>
                <p><b>Category:</b> {listData.category}</p>
                <p><b>Content:</b></p>
                <p dangerouslySetInnerHTML={{ __html: listData.content }} />
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