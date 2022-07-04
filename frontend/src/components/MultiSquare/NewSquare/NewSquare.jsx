import styles from './newSquarestyle.module.css';

function NewSquare () {

    return (
        <div className={styles.bodyNewSquare}>
            <button className={styles.buttonNewSquare}>
                <p className={styles.pNewSquare}>+</p>
            </button>
        </div> 
    )
}

export default NewSquare