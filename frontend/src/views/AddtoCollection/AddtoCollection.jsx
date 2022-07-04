import styles from "./addtoCollectionStyle.module.css"
import CollectionSquare from "../../components/MultiSquare/CollectionSquare/CollectionSquare";

function AddtoCollection({collectionArray}) {
    return(
        <div className={styles.bodyAddtoCollection}>
            <ul className={styles.addCollectionsUL}>
                {collectionArray.map(
                        item => <CollectionSquare collection={item}/>
                )}
            </ul>
        </div>

    )
}

export default AddtoCollection