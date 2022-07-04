import Tag from "../Tag/Tag";
import styles from "./collectionHorListStyle.module.css";

function CollectionHorList({ collectionArray }) {

    return (
        <div className={styles.collectionHorListbody}>

            <ul className={styles.hortags}>
                {collectionArray.map(
                    item => <Tag coleccion={item}/>
                )}
            </ul>
        </div>
    )
}

export default CollectionHorList