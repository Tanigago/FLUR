import { Link } from 'react-router-dom';
import styles from './itemSquareStyles.module.css';
import panda from '../EditSquare/panda.jpg';

function ItemSquare () {

    return(
        <Link to="/">
            <div className={styles.itemSquare}>
                <img src={panda} width={100} height={100} alt='Panda Rojo' />
            </div>
        </Link>
    )
}

export default ItemSquare