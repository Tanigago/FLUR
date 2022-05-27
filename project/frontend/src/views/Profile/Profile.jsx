import style from './profileStyle.module.css';
import iconback90 from '../../img/iconback90.png';
import iconprofile from '../../img/iconprofile.png';

import { Link } from 'react-router-dom';

function Register () {
    
    return (
        <div className={style.bodyProfile}>
            <div className={style.iconprofile}>
                <img src={iconback90} width={20} height={20} alt='Back' />
                <img src={iconprofile} width={20} height={20} alt='Profile' />
            </div>
        </div>
    )
}

export default Register