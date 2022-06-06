import styles from './tagStyle.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../storage/Sharedtorage';

function Tag({ coleccion }) {

    const { states } = useContext(Context);

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


/*
        <div>
            <li className={styles.listElements}>
                <Link to={collection.tagpath}>
                <p className={styles.etiqueta}>{collection.tagtext}</p>
                </Link>
                <button className={collection.tagdelbutton ?  styles.showtagDelbutton : styles.hideTagDelbutton }>X</button>
            </li>
        </div>
*/