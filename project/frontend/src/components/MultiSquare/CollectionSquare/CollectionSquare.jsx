import styles from './collectionSquare.module.css';

import { Link } from 'react-router-dom';

function CollectionSquare({ tagPath="/verano", tagText="Verano", count=5, pluralize }) {

    return (
        <Link to={tagPath}>
        <div className={styles.borderSquare}>
            
            <p className={styles.collectionName}>{tagText}</p>
            <p className={styles.collectionCounter}>{count} item{pluralize && 's'}</p>
            
        </div>
        </Link>
    )
}

export default CollectionSquare