import styles from './multiSquareStyle.module.css';

function MultiSquare ({children}) {
    
    return (
        <button className={styles.clickme}>
            {children}
        </button>
    )
}
export default MultiSquare