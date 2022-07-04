import styles from './tagStyle.module.css';

import { Link } from 'react-router-dom';

function Tag({ coleccion }) {

    return (
        <div className={styles.listElements}>
            <li className={styles.liElement}>
                <Link to={coleccion.tagpath}>
                    {coleccion.tagtext}
                </Link>
                <button className={coleccion.tagdelbutton ?  styles.showtagDelbutton : styles.hideTagDelbutton}>X</button>
            </li>
        </div>
    )
}

export default Tag