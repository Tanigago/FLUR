import styles from './collectionSquare.module.css';

import { Link } from 'react-router-dom';

function CollectionSquare({ tagPath, tagText, count, pluralize }) {

    return (
        <div className={styles.borderSquare}>
            <Link to={tagPath}>
            <p className={styles.collectionName}>{tagText}</p>
            <p className={styles.collectionCounter}>{count} item{pluralize && 's'}</p>
            </Link>
        </div>
    )
}

export default CollectionSquare

