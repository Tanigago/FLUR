import styles from "./editCollectionStyle.module.css"
import EditSquare from "../../components/MultiSquare/EditSquare/EditSquare"

function EditCollection () {
    return (
        <div className={styles.bodyEditCollection}>
            <EditSquare/>
        </div>
    )
}

export default EditCollection