import styles from "./collectionsStyle.module.css"
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare";
import CollectionSquare from "../../components/MultiSquare/CollectionSquare/CollectionSquare";
import { Link } from "react-router-dom";

function Collections({collectionArray}) {
    return(
        <div className={styles.bodyCollections}>
            <ul className={styles.collectionsUL}>
                {collectionArray.map(
                        item => <CollectionSquare collection={item}/>
                )}
            </ul>
            <Link to="/newcollection/"><NewSquare/></Link>
        </div>

    )
}

export default Collections