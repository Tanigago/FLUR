import styles from "./editItemStyle.module.css"
import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import Tag from "../../components/Tag/Tag"
import MenuTop from "../../components/MenuTop/MenuTop";
import MenuBottom from "../../components/MenuBottom/MenuBottom";

function EdiItem ({tagsArray}) {
    return (
        <>
            <MenuTop insitu={"Editando calzado"}/>

            <div className={styles.bodyEditItem}>
                <ItemSquare/>
                <ul className={styles.boxTagList}>
                    {tagsArray.map(
                        item => <Tag coleccion={item}/>
                    )}
                </ul>
                <input type="text" name="tag" size="40" placeholder="Añadir a la colección..."></input>
            </div>

            <MenuBottom/>
        </>
    )
}

export default EdiItem