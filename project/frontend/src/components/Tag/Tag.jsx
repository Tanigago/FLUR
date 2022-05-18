import { Link } from "react-router-dom";
import TagsList from "../tagsList/TagsList";

import styles from './tagStyle.module.css';

function Tag ({tagPath, tagText, tagDelbutton}){
    return(
        <div className={styles.tags}>
            <li className={styles.listElements}>
                <Link to={tagPath}>
                <p className={styles.etiqueta}>{tagText}</p>
                </Link>
                <button className={tagDelbutton && styles.showTagDelbutton}>X</button>
            </li>
        </div>
    )
}

export default Tag