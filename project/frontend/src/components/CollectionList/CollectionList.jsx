import styles from "./collectionListStyle.module.css";
import CollectionSquare from "../MultiSquare/CollectionSquare/CollectionSquare";

function CollectionList({collectionArray}) {
    return(
        <ul className={styles.collectionsbody}>
            {collectionArray.map(
                    item => <CollectionSquare collection={item}/>
            )}
        </ul>
    )
}

export default CollectionList