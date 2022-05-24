import styles from './newSquarestyle.module.css';

function NewSquare () {

    return (
        <>
            <button className={styles.buttonNewSquare}>
                <p className={styles.pNewSquare}>+</p>
            </button>
        </> 
    )
}

export default NewSquare