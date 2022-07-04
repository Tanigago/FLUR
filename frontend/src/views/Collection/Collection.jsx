import styles from "./collectionStyle.module.css"
import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare"
import { useParams } from "react-router-dom"



function Collection () {

    const params = useParams()

    //const collection = fetch(`.../${params.id}`)

    return (
        <div className={styles.bodyCollection}>
            <ItemSquare/>
            <NewSquare/>
        </div>
    )
}

export default Collection