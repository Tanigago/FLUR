import styles from './collectionSquare.module.css';

import { Link } from 'react-router-dom';
import { useContext } from 'react';
import {Context} from "../../../storage/Sharedtorage.jsx";

function CollectionSquare(props) {

    const [ store, setStore ] = useContext(Context);

    // { tagpath, tagtext, count, pluralize }

    return (
        <Link to={store.tagpath ?? "/"}>
            <div className={styles.borderSquare}>
                
                <p className={styles.collectionName}>{store.tagtext}</p>
                <p className={styles.collectionCounter}>{store.count ?? 0} item{store.pluralize && 's'}</p>
                
            </div>
        </Link>
    )
}

export default CollectionSquare