import { Link } from "react-router-dom";

import styles from './tagStyle.module.css';
import { useContext } from "react";
import {Context} from '../../storage/Sharedtorage.jsx';

function Tag (){
    const [ store, setStore ] = useContext(Context);

    return(
        <>
            <li className={styles.listElements}>
                <Link to={store.tagpath}>
                <p className={styles.etiqueta}>{store.tagtext}</p>
                </Link>
                <button className={store.tagdelbutton ?  styles.showtagDelbutton : styles.hideTagDelbutton }>X</button>
            </li>
        </>
    )
}

export default Tag