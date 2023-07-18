import AddPostForm from "../../features/AddPostForm/AddPostForm";
import PostForm from "../../features/PostForm/PostForm";
import styles from './PageAdd.module.scss';

const PageAdd = () => {
    return (
        <div>
            <div className={styles.root}>
                <h2>Add a post</h2>
                <AddPostForm />
                <PostForm />
            </div>
        </div>

    )
}

export default PageAdd;