import style from './homeStyle.module.css';
import MenuTop from "../../components/MenuTop/MenuTop";
import { Link } from 'react-router-dom';
import MenuBottom from '../../components/MenuBottom/MenuBottom';

function Home() {

    return (
        <>
            <MenuTop insitu={"FLUR"}/>
            <div className={style.bodyHome}>
                <div className={style.bodyLinks}>
                    <Link to="/today/"><button>¿Qué me pongo?</button></Link>
                    <Link to="/today/"><button>Próximos días</button></Link>
                    <Link to="/collections/"><button>Mis colecciones</button></Link>     
                </div>
            </div>
            <MenuBottom/>
        </>
    )
}

export default Home