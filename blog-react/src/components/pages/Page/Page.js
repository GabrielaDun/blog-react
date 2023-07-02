import { useSelector } from 'react-redux';
import { getPostsById } from '../../../redux/postsRedux';
import { useParams } from 'react-router';
import Button from '../../features/Button/Button';

const Page = () => {
    let { id } = useParams();
    console.log(id);
    const listData = useSelector(state => getPostsById(state, id));
    console.log(listData);
    return (
        <div>
            <div>
                <h2>{listData.title}</h2>
                <p><span>Author: </span>{listData.author}</p>
                <p><span>Published: </span>{listData.publishedDate}</p>
                <p>{listData.content}</p>
            </div>
            <div>
                <Button>Edit</Button>
                <Button>Delete</Button>
            </div>

        </div>
    )
}

export default Page;