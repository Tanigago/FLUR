import styles from "./editCollectionStyle.module.css"
import EditSquare from "../../components/MultiSquare/EditSquare/EditSquare"
import MenuTop from "../../components/MenuTop/MenuTop";
import MenuBottom from "../../components/MenuBottom/MenuBottom";

function EditCollection () {
    return (
        <>
            <MenuTop insitu={"Editando colección"}/>

            <div className={styles.bodyEditCollection}>
                <EditSquare/>
            </div>

            <MenuBottom/>
        </>
    )
}

export default EditCollection