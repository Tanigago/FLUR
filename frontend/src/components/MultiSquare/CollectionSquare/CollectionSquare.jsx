import styles from './collectionSquare.module.css';

import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../../services/SharedStorage';

function CollectionSquare({ collection }) {

    return (
        <div className={styles.bodyCollectionSquare}>
            <Link to={collection.tagpath ?? "/"}>
                <div className={styles.borderSquare}>

                    <p className={styles.collectionName}>{collection.tagtext}</p>
                    <p className={styles.collectionCounter}>{collection.count ?? 0} item{collection.pluralize && 's'}</p>

                </div>
            </Link>
        </div>
    )
}

export default CollectionSquare