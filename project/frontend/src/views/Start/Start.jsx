import style from './startStyle.module.css';

import { Link } from 'react-router-dom';

function Start () {
    
    return (
        <div className={style.bodyStart}>
            <div className={style.textStart}>
                <p>Encuentra tu calzado</p>
                <p>con un toque.</p>
                <br></br>
                <p>Nosotros te lo</p>
                <p>ponemos fácil.</p>
            </div>

            <div className={style.buttonsStart}>
                <div className={style.linkRegister}>
                    <Link to="/register/">
                        <button className={style.registerButton}>Regístrate</button>
                    </Link>
                </div>
                <div  className={style.linkRegister}>
                    <Link to="/login/">
                        <button className={style.signinButton}>Inicia sesión</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Start