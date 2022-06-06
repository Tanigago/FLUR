import Tag from "../Tag/Tag";
import styles from "./collectionHorListStyle.module.css";
import { useContext } from "react";
import { Context } from '../../storage/Sharedtorage.jsx';

function CollectionHorList({ collectionArray }) {

    const { states } = useContext(Context);

    return (
        <div className={styles.collectionHorListbody}>
            <ul className={styles.hortags}>
                {collectionArray.map(
                    item => <Tag coleccion={item}/>
                )}
            </ul>
        </div>
    )
}

export default CollectionHorList