import { Link } from 'react-router-dom';
import styles from './editSquarestyle.module.css';
import calzado1 from '../../../img/calzado1.jpg';


function EditSquare() {

    return (

        <div className={styles.bigBox}>
            <div className={styles.backImg}>
                <img className={styles.backgroundPhoto} src={calzado1} width={106} height={106} alt='Botas' />
            </div>

            <div className={styles.EditSquare}>
                <button className={styles.removeButton}>x</button>
                <Link to="/editItem/">
                    <p className={styles.editButton}>EDITAR</p>
                </Link>
            </div>
        </div>

    )
}

export default EditSquare