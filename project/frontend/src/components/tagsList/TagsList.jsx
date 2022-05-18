import Tag from "../Tag/Tag";
import styles from "./tagsListStyle.module.css";

function TagsList({tagsArray}) {
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