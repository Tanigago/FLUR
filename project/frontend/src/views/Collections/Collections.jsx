import styles from "./collectionsBodyStyle.module.css"
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare";
import CollectionSquare from "../../components/MultiSquare/CollectionSquare/CollectionSquare";

function Collections({collectionArray}) {
    return(
        <>
            <ul className={styles.collectionsBody}>
                {collectionArray.map(
                        item => <CollectionSquare collection={item}/>
                )}
            </ul>
            <NewSquare/>
        </>

    )
}

export default Collections