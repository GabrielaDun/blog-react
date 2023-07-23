
import { useSelector } from 'react-redux';
import styles from './CategoryList.module.scss'
import { getCategories } from '../../../redux/categoriesRedux';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const categories = useSelector(getCategories);

    return (
        <div className={styles.root}>
            <table class={styles.table} style={{ width: '70%' }} >
                {categories.map(category => (
                    <div key={category}  class={styles.tab}>
                        <Link className={styles.button} to={'/category/'+ category.toLowerCase()} >{category}</Link>
                    </div>
                ))}
            </table>
        </div>
    );

};

export default CategoryList;