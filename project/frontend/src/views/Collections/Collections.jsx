import styles from "./collectionsStyle.module.css"
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare";
import CollectionSquare from "../../components/MultiSquare/CollectionSquare/CollectionSquare";

function Collections({collectionArray}) {
    return(
        <div className={styles.bodyCollections}>
            <ul className={styles.collectionsUL}>
                {collectionArray.map(
                        item => <CollectionSquare collection={item}/>
                )}
            </ul>
            <NewSquare/>
        </div>

    )
}

export default Collections