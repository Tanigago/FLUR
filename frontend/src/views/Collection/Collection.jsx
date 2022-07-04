import styles from "./collectionStyle.module.css"
import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import MenuTop from "../../components/MenuTop/MenuTop";
import NewSquare from "../../components/MultiSquare/NewSquare/NewSquare"
import { useParams } from "react-router-dom"
import MenuBottom from "../../components/MenuBottom/MenuBottom";



function Collection () {

    const params = useParams()

    //const collection = fetch(`.../${params.id}`)

    return (
        <>
            <MenuTop insitu={"Pdte corregir"}/>

            <div className={styles.bodyCollection}>
                <ItemSquare/>
                <NewSquare/>
            </div>
            
            <MenuBottom/>
        </>
    )
}

export default Collection