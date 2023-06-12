import { NavLink } from "react-router-dom";
import styles from './NavBar.module.scss';


const NavBar = () => {
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.blogName}><p>Woman in Triathlon Blog</p></div>
                <div className={styles.links}>
                    <NavLink className={styles.link} to="/">Home</NavLink>
                    <NavLink className={styles.link} to="/about">About</NavLink>
                </div>
            </div>
        </div>

    )
}

export default NavBar;