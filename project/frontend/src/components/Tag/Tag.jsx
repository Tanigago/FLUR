import { Link } from "react-router-dom";

import "./tagStyle.module.css";

function Tag ({tagPath, tagText, tagDelbutton}){
    return(
            <li>
                <Link to={tagPath}>
                <p>{tagText}</p>
                </Link>
                <button className={tagDelbutton && "showTagDelbutton"}>X</button>
            </li>
    )
}

export default Tag