import styles from "./editItemStyle.module.css"
import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import TagsList from "../../components/tagsList/TagsList"

function EdiItem ({tagsArray}) {
    return (
        <div className={styles.bodyEditItem}>
            <ItemSquare/>
            <ul className={styles.boxTagList}>
            {tagsArray.map(
                item => <TagsList tags={item.tagText}/>
            )}
            </ul>
            <input type="text" name="tag" size="40" placeholder="Añadir a la colección..."></input>
        </div>
    )
}

export default EdiItem