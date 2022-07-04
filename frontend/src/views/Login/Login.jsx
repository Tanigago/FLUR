import style from './loginStyle.module.css';
import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logingUser } from '../../tools/controllers.mjs';
import { changeValueFactory } from '../../tools/apptools.mjs';
import { Context } from '../../services/SharedStorage';


function Login() {
    const {states, actions} = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const onChangeEmail = changeValueFactory(setEmail);
    const onChangePassword = changeValueFactory(setPassword);


    async function sendLogin(ev) {
        ev.preventDefault();
        
        const user = {
            email,
            password
        }
        const userData = await logingUser(user);
        actions.updateUserData(userData);
        console.log(states);
        navigate("/home/");
    }

    return (

        <div className={style.bodyLogin}>
            <div className={style.textLogin}>
                <h2>¡Hola de nuevo!</h2>
                <br></br>
                <p>¡Te echábamos de menos!</p>
            </div>

            <div className={style.inputsLogin}>
                <form onSubmit={sendLogin}>
                    <input type="email" name="email" placeholder='Email' value={email} onChange={onChangeEmail} />
                    <input type="password" name="password" placeholder="Contraseña" value={password} onChange={onChangePassword} />
                    <div className={style.buttonLogin}>
                        <button className={style.signinButton}>Inicia sesión</button>
                    </div>
                    <div className={style.lastLineLog}>
                        <p>¿Aún no eres miembro?</p><Link to='/register/' className={style.registerLink}>Regístrate</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Login;