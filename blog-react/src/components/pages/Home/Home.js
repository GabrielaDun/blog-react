import { Link } from 'react-router-dom';
import { Button} from "react-bootstrap";
import Posts from '../../features/Posts/Posts';
import styles from './Home.module.scss';


const Home = () => {
    return (
        <div>
            <div className={styles.homeContainer}>
                <h3>All posts</h3>
                <Button size="lg" variant="outline-info" as={Link} to='/post/add'>Add post</Button>
            </div>
            <Posts />
        </div>
    )
}

export default Home; 