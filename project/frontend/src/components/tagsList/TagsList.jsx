import Tag from "../Tag/Tag";
import styles from "./tagsListStyle.module.css";
import { useContext } from "react";
import {Context} from '../../storage/Sharedtorage.jsx';

function TagsList() {
    
    const [ store, setStore ] = useContext(Context);

    return(
        <ul className={styles.tags}>
            <Tag tagPath={store.path} tagText={store.name} tagDelbutton={store.delbutton}/>
        </ul>
    )
}

export default TagsList