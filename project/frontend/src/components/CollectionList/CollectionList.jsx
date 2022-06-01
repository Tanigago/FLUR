import Tag from "../Tag/Tag";
import styles from "./collectionTagListStyle.module.css";
import { useContext } from "react";
import {Context} from '../../storage/Sharedtorage.jsx';

function CollectionTagList({collection}) {
    
    const {states} = useContext(Context);

    return(
        <ul className={styles.tags}>
            <Tag tagPath={collection.tagpath} tagText={collection.tagtext} tagDelbutton={collection.tagdelbutton}/>
        </ul>
    )
}

export default CollectionTagList