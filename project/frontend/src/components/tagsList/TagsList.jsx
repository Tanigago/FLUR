import Tag from "../Tag/Tag";
import styles from "./tagsListStyle.module.css";
import { useContext } from "react";
import {Context} from '../../storage/Sharedtorage.jsx';

function TagsList({tagsArray}) {
    
    const [ store, setStore ] = useContext(Context);

    const tags = tagsArray.map(
        item => <Tag tagPath={item.path} tagText={item.name} tagDelbutton={item.delbutton}/>
    )
    return(
        <ul className={styles.tags}>
            {tags}
        </ul>
    )
}

export default TagsList