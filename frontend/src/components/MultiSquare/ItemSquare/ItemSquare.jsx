import { Link } from 'react-router-dom';
import styles from './itemSquareStyles.module.css';
import calzado1 from '../../../img/calzado1.jpg';

function ItemSquare () {
    
    return(
        <div className={styles.bodyItemSquare}>
            <Link to="/">
                <div className={styles.itemSquare}>
                    <img className={styles.backgroundPhoto} src={calzado1} width={100} height={100} alt='Botas' />
                </div>
            </Link>
        </div>
    )
}

export default ItemSquare