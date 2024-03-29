import style from './registerStyle.module.css';

import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

import { postUser } from '../../tools/controllers.mjs';
import { useState } from 'react';

function Register () {

    const navigate = useNavigate()

    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    function onChangeNombre (ev) {
        setName(ev.target.value)
    }

    function onChangeEmail (ev) {
        setEmail(ev.target.value)
    }

    function onChangePassword (ev) {
        setPassword(ev.target.value)
    }

    function onSubmit (ev) {
        ev.preventDefault();

        postUser({name, email, password})
        swal({
            title: "¡Registro completado!",
            text: "Inicia sesión y disfruta ;)",
            icon: "success",
        });
        navigate("/login/")
    }

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
                <form  onSubmit={onSubmit}>
                    <input type="text" name="nombre" placeholder='Nombre' value={name} onChange={onChangeNombre}/>
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChangeEmail}/>
                    <input type="password" name="password" placeholder="Contraseña" value={password} onChange={onChangePassword} />
                    <div className={style.buttonRegister}>
                        <button className={style.registerButton}>Regístrate</button>
                    </div>
                    <div className={style.lastLineReg}>
                        <p>¿Ya eres miembro?</p><Link to='/login/' className={style.loginLink}>Inicia sesión</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register