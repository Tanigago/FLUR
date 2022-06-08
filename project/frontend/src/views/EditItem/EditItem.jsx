import styles from "./editItemStyle.module.css"
import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import Tag from "../../components/Tag/Tag"

function EdiItem ({tagsArray}) {
    return (
        <div className={styles.bodyEditItem}>
            <ItemSquare/>
            <ul className={styles.boxTagList}>
                {tagsArray.map(
                    item => <Tag coleccion={item}/>
                )}
            </ul>
            <input type="text" name="tag" size="40" placeholder="Añadir a la colección..."></input>
        </div>
    )
}

export default EdiItem