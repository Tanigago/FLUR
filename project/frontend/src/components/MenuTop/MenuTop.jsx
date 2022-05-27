import styles from './menuTopStyle.module.css';
import iconback90 from './iconback90.png';
import iconmenuvert96 from './iconmenuvert96.png';

import { Link } from 'react-router-dom';

function MenuTop({goback , insitu}) {

    return (
        <div className={styles.menuhori}>
            <Link to={"/"+goback}>
                <button className={styles.goback}>
                    <img src={iconback90} width={20} height={20} alt='Back' />
                </button>
            </Link>
            <p className={styles.titlePage}>{insitu}</p>
            <Link to="http://localhost:3000/">
                <button className={styles.gomenuvert}>
                    <img src={iconmenuvert96} width={25} height={25} alt='Menu' />
                </button>
            </Link>
        </div>
    )

}

export default MenuTop
