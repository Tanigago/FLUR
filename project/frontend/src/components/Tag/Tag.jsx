import { Link } from "react-router-dom";

import styles from './tagStyle.module.css';

function Tag ({tagPath, tagText, tagDelbutton}){
    return(
        <>
            <li className={styles.listElements}>
                <Link to={tagPath}>
                <p className={styles.etiqueta}>{tagText}</p>
                </Link>
                <button className={tagDelbutton ?  styles.showtagDelbutton : styles.hideTagDelbutton }>X</button>
            </li>
        </>
    )
}

export default Tag