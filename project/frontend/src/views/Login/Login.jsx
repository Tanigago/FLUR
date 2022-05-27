import style from './loginStyle.module.css';

import { Link } from 'react-router-dom';

function Login() {

    return (
        <div className={style.bodyLogin}>
            <div className={style.textLogin}>
                <h2>¡Hola de nuevo!</h2>
                <br></br>
                <p>¡Te echábamos de menos!</p>
            </div>

            <div className={style.inputsLogin}>
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder="Contraseña" />
            </div>

            <div className={style.buttonLogin}>
                <Link to="/signin/">
                    <button className={style.signinButton}>Inicia sesión</button>
                </Link>
            </div>
            
            <div className={style.lastLineLog}>
                <p>¿Aún no eres miembro?</p><Link to='/register/' className={style.registerLink}>Regístrate</Link>
            </div>
        </div>
    )
}

export default Login