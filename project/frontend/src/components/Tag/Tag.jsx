import { Link } from "react-router-dom"

function Tag ({tagPath, tagText}){
    return(
        <Link to={tagPath}>
            <p>{tagText}</p>
        </Link>
    )
}

export default Tag