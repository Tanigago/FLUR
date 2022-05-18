import styles from './collectionSquare.module.css'
import Tag from '../../Tag/Tag'

function CollectionSquare() {

    return (
        <div className={styles.collectionSquare}>
            <span className={styles.collectionName}>
                <Tag tagPath="/ruta-de-coleccion" tagText="Nombre de etiqueta" />
            </span>
            <p className={styles.collectionCounter}>1 items</p>
        </div>
    )
}

export default CollectionSquare