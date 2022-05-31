import styles from './collectionSquare.module.css';

import { Link } from 'react-router-dom';

function CollectionSquare({collection}) {

    const [states, actions] = useContext(Context);

    return (
        <Link to={collection.tagpath ?? "/"}>
            <div className={styles.borderSquare}>

                <p className={styles.collectionName}>{collection.tagtext}</p>
                <p className={styles.collectionCounter}>{collection.count ?? 0} item{collection.pluralize && 's'}</p>

            </div>
        </Link>
    )
}

export default CollectionSquare