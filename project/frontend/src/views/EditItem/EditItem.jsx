import ItemSquare from "../../components/MultiSquare/ItemSquare/ItemSquare"
import TagsList from "../../components/tagsList/TagsList"

function EdiItem () {
    return (
        <>
            <ItemSquare/>
            <TagsList/>
            <input type="text" name="tag" size="40" placeholder="Añadir a la colección..."></input>
        </>
    )
}

export default EdiItem