import { Link } from 'react-router-dom';
import styles from './editSquarestyle.module.css';
import panda from './panda.jpg';


function EditSquare(tagPath) {

    return (  
         
        <div className={styles.bigBox}>        
            <div className={styles.backImg}>
                <img src={panda} width={100} height={100} alt='Panda Rojo' />
            </div>
            
            <div className={styles.EditSquare}>
                <button className={styles.removeButton}>x</button>
                <Link to="/">
                <p className={styles.editButton}>EDITAR</p>
                </Link>
            </div>
        </div>
      
    )
}

export default EditSquare