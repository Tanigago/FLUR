import styles from "./collectionStyle.module.css"
import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare"



function Collection () {
    return (
        <div className={styles.bodyCollection}>
            <ItemSquare/>
            <NewSquare/>
        </div>
    )
}

export default Collection