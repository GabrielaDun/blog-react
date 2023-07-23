
//import styles from './CategoryPage.module.scss';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { getCategoryById } from '../../../redux/categoriesRedux';
import { Col, Row } from "react-bootstrap";
import PostBox from '../../features/PostBox/PostBox';
import styles from './CategoryPage.module.scss'



const CategoryPage = () => {
    const {category} = useParams();
    console.log({category}, category);
    const categoryData = useSelector(state => 
        getCategoryById(state, category))
    console.log(categoryData);

    return (
        <div >
            <h1 className={styles.title}>Category: {category}</h1>
            <Row xs={1} md={2} lg={3} xl={4} className="g-4">
            {categoryData.map(category => (
                <Col key={category.id}>
                    <PostBox {...category} />
                </Col>
            ))}
        </Row>
        </div>
    );

};

export default CategoryPage;