import styles from './menuTopStyle.module.css';
import { useNavigate } from 'react-router-dom';
import iconback90 from '../../img/iconback90.png';
import iconmenuvert96 from '../../img/iconmenuvert96.png';

import { Link } from 'react-router-dom';

function MenuTop({insitu}) {
    const navigate = useNavigate();
    
    return (
        <div className={styles.bodyMenuTop}>

                <button className={styles.goback} onClick={() => navigate(-1)}>
                    <img src={iconback90} width={20} height={20} alt='Back' />
                </button>

            <p className={styles.titlePage}>{insitu}</p>
            <Link to="/home/">
                <button className={styles.gomenuvert}>
                    <img src={iconmenuvert96} width={25} height={25} alt='Menu' />
                </button>
            </Link>
        </div>
    )

}

export default MenuTop
