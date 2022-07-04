import styles from "./collectionsStyle.module.css"
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare";
import CollectionSquare from "../../components/MultiSquare/CollectionSquare/CollectionSquare";
import MenuTop from "../../components/MenuTop/MenuTop";
import { Link } from "react-router-dom";
import MenuBottom from "../../components/MenuBottom/MenuBottom";

function Collections({collectionArray}) {
    return(
        <>
            <MenuTop insitu={"Colecciones"}/>

                <div className={styles.bodyCollections}>
                    <ul className={styles.collectionsUL}>
                        {collectionArray.map(
                                item => <CollectionSquare key={item.id} collection={item}/>
                        )}
                    </ul>
                    <Link to="/newcollection/"><NewSquare/></Link>
                </div>
            <MenuBottom/>
        </>
    )
}

export default Collections