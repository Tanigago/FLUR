import style from './profileStyle.module.css';
import iconprofile from '../../img/iconprofile.png';
import iconback90 from '../../img/iconback90.png';
import { Link } from 'react-router-dom';
import MenuTop from '../../components/MenuTop/MenuTop';

function Profile ({user}) {
    
    return (
        <>
            <MenuTop insitu={"Mi perfil"}/>
            <div className={style.bodyProfile}>
                <div className={style.headerProfile}>
                    <img src={iconprofile} width={30} height={30} alt='Profile' />
                    <h2>Hola, {user.name}</h2>
                </div>

                <div className={style.sections}>

                    <h2>// Configuración de la cuenta</h2>
                    <Link to="/">
                        <button>Información personal</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>
                    <Link to="/">
                        <button>Notificaciones</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>

                    <h2>// Asistencia</h2>
                    <Link to="/">
                        <button>¿Cómo funciona FLUR?</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>
                    <Link to="/">
                        <button>Recibe ayuda</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>
                    <Link to="/">
                        <button>Dinos qué piensas</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>

                    <h2>// Configuración de la cuenta</h2>
                    <Link to="/">
                        <button>Términos y servicios</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>
                    <Link to="/">
                        <button>Configuración de privacidad</button>
                        <img src={iconback90} width={10} height={10} alt='Forward'/>
                    </Link>
                </div>

                <h3>Cerrar sesión</h3>
                <h3>V.0.1</h3>
            
            </div>
        </>
    )
}

export default Profile