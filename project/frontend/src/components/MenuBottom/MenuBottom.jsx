import { Link } from 'react-router-dom';
import styles from './menuBottomStyle.module.css';

import iconfolder from './iconfolder.png';
import iconprofile from './iconprofile.png';


function MenuBottom() {

    return (
        <div className={styles.navBottom}>
            <Link to="/">
                <button className={styles.gocollections}>
                    <img src={iconfolder} width={40} height={40} alt='Collections' />
                </button>
            </Link>

            <Link to="/">
                <button className={styles.goNewPhoto}>+</button>
            </Link>

            <Link to="/">
                <button className={styles.goProfile}>
                    <img src={iconprofile} width={40} height={40} alt='Profile' />
                </button>
            </Link>
        </div>
    )
}

export default MenuBottom