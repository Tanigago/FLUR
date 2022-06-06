import Tag from "../Tag/Tag";
import styles from "./tagsListStyle.module.css";
import { useContext } from "react";
import {Context} from '../../storage/Sharedtorage.jsx';

function TagsList({collectionArray}) {
    
    return(
        <ul className={styles.tags}>
            {collectionArray.map(
                item => <Tag coleccion={item}/>
            )}
        </ul>
    )
}

export default TagsList