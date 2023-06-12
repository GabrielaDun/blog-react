import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Row, Col } from "react-bootstrap";
import PostBox from '../PostBox/PostBox';

const Posts = () => {
    const posts = useSelector(getAllPosts);
    console.log(posts);
    return (
        <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {posts.map(post => (
                <Col key={post.id}>
                    <PostBox {...post} />
                </Col>
            ))}
        </Row>
    )
}

export default Posts;