import AddPostForm from "../../features/AddPostForm/AddPostForm";
import styles from './PageAdd.module.scss';

const PageAdd = () => {
    return (
        <div>
            <div className={styles.root}>
                <h2>Add a post</h2>
                <AddPostForm />
            </div>
        </div>

    )
}

export default PageAdd;