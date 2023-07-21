//import { Link } from 'react-router-dom';
import Button from '../../features/Button/Button';
import Posts from '../../features/Posts/Posts';
import styles from './Home.module.scss';
import { Link} from 'react-router-dom';


const Home = () => {
    return (
        <div> 
            <div className={styles.homeContainer}>
                <h3>All posts</h3>
                <Link className={styles.button}to={'/post/add'}><Button>Add post</Button></Link>
            </div>
            <Posts />
        </div>
    )
}

export default Home; 