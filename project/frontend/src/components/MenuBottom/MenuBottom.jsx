import { Link } from 'react-router-dom';
import styles from './menuBottomStyle.module.css';

import collectionspng from './foldericon.png';

function MenuBottom() {

    return (
        <div className={styles.navBottom}>
            <Link to="/">
                    <button className={styles.gocollections}>
                        <img src={collectionspng} width={40} height={40} alt='Collections' />
                    </button>
                </Link>
            <Link to="/"><button className={styles.goNewPhoto}>+</button></Link>
            <Link to="/"><button className={styles.goProfile}></button></Link>
        </div>
    )
}

export default MenuBottom