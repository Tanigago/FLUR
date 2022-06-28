import style from './loginStyle.module.css';

import { Link, useNavigate } from 'react-router-dom';
import { getUser } from '../../fetchLibrary';
import { useState } from 'react';

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function onChangeEmail (ev) {
        setEmail(ev.target.value)
    }

    function onChangePassword (ev) {
        setPassword(ev.target.value)
    }

    function onSubmit () {
        getUser(email, password)
        navigate("/home/")
    }

    return (
        <div className={style.bodyLogin}>
            <div className={style.textLogin}>
                <h2>¡Hola de nuevo!</h2>
                <br></br>
                <p>¡Te echábamos de menos!</p>
            </div>

            <div className={style.inputsLogin}>
                <form onSubmit={onSubmit}>
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChangeEmail}/>
                    <input type="password" name="password" placeholder="Contraseña" value={password} onChange={onChangePassword}/>
                    <div className={style.buttonLogin}>
                        <button className={style.signinButton}>Inicia sesión</button>
                    </div>
                    <div className={style.lastLineLog}>
                        <p>¿Aún no eres miembro?</p><Link to='/register/' className={style.registerLink}>Regístrate</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login