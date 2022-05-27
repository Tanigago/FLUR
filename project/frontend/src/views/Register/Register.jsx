import style from './registerStyle.module.css';

import { Link } from 'react-router-dom';

function Register () {
    
    return (
        <div className={style.bodyRegister}>
            <div className={style.textRegister}>
                <h2>¡Regístrate ahora!</h2>
                <br></br>
                <p>Crea una cuenta</p>
                <br></br>
                <p>y guarda tus</p>
                <br></br>
                <p>preferencias.</p>
            </div>

            <div className={style.inputsRegister}>
                <input type="name" name="nombre" placeholder='Nombre' />
                <input type="email" name="email" placeholder='Email' />
                <input type="password" name="password" placeholder="Contraseña" />
            </div>

            <div className={style.buttonRegister}>
                <Link to="/">
                    <button className={style.registerButton}>Regístrate</button>
                </Link>
            </div>

            <div className={style.lastLineReg}>
                <p>¿Ya eres miembro?</p><Link to='/login/' className={style.loginLink}>Inicia sesión</Link>
            </div>
        </div>
    )
}

export default Register