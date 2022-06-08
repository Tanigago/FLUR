import style from './todayStyle.module.css';

import apiWeather from '../../img/apiWeatherExample.png';

import Tag from '../../components/Tag/Tag';
import ItemSquare from '../../components/MultiSquare/ItemSquare/ItemSquare';

function Home({tagsArray}) {

    return (
        <div className={style.bodyToday}>
            <div className={style.apiWeather}>
                <img src={apiWeather} alt='Weather' />
            </div>    

            <div className={style.horizontalTags}>
                <p>Pdte poner componente tags horizontal.</p>
                {tagsArray.map(
                    item => <Tag coleccion={item}/>
                )}
            </div> 

            <div className={style.itemGallery}>
                <ItemSquare/>
            </div>      
        </div>
    )
}

export default Home