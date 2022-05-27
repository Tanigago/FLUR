import style from './homeStyle.module.css';

import { Link } from 'react-router-dom';

function Home() {

    return (
        <div className={style.bodyHome}>
            <div className={style.bodyLinks}>
                <Link to="/today/"><button>¿Qué me pongo?</button></Link>
                <Link to="/today/"><button>Próximos días</button></Link>
                <Link to="/collections/"><button>Mis colecciones</button></Link>     
            </div>
        </div>
    )
}

export default Home