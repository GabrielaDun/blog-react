import EditPostForm from "../../features/EditPostForm/EditPostForm";
import styles from './PageEdit.module.scss';
import { useParams } from 'react-router';

const PageEdit = () => {
    const { id } = useParams();
    console.log(id);
    return (
        <div>
            <div className={styles.root}>
                <h2>Edit a post</h2>
                <EditPostForm />
            </div>
        </div>

    )
}


export default PageEdit;