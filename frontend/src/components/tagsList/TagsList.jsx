import Tag from "../Tag/Tag";
import styles from "./tagsListStyle.module.css";


function TagsList({collectionArray}) {
    
    return(
        <ul className={styles.tags}>
            {collectionArray.map(
                item => <Tag coleccion={item}/>
            )}
        </ul>
    )
}

export default TagsList