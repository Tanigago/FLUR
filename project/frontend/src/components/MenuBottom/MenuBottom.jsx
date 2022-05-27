import { Link } from 'react-router-dom';
import styles from './menuBottomStyle.module.css';

import iconfolder from '../../img/iconfolder.png';
import iconcircleprofile from '../../img/iconcircleprofile.png';


function MenuBottom() {

    return (
        <div className={styles.navBottom}>
            <Link to="/collections/">
                <button className={styles.gocollections}>
                    <img src={iconfolder} width={40} height={40} alt='Collections' />
                </button>
            </Link>

            <Link to="/">
                <button className={styles.goNewPhoto}>+</button>
            </Link>

            <Link to="/profile/">
                <button className={styles.goProfile}>
                    <img src={iconcircleprofile} width={40} height={40} alt='Profile' />
                </button>
            </Link>
        </div>
    )
}

export default MenuBottom