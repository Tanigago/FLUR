import { Link } from 'react-router-dom';
import styles from './editSquarestyle.module.css';
import img from './gato.jpg';

function EditSquare1() {

    return (  
        <Link to="/cosa/que/no/existe" className={styles.gato}>  
            <div className={styles.EditSquare}>
                <button className={styles.removeButton}>x</button>
                <p className={styles.editButton}>Editar</p>
            </div>
        </Link>
    )
}

export default EditSquare1