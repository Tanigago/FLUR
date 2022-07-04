import styles from "./addtoCollectionStyle.module.css"
import CollectionSquare from "../../components/MultiSquare/CollectionSquare/CollectionSquare";
import MenuTop from "../../components/MenuTop/MenuTop";
import MenuBottom from "../../components/MenuBottom/MenuBottom";

function AddtoCollection({collectionArray}) {
    return(
        <>
            <MenuTop insitu={"Añadir a..."}/>

                <div className={styles.bodyAddtoCollection}>
                    <ul className={styles.addCollectionsUL}>
                        {collectionArray.map(
                                item => <CollectionSquare key={item.id} collection={item}/>
                        )}
                    </ul>
                </div>

            <MenuBottom/>
        </>
    )
}

export default AddtoCollection