import style from './todayStyle.module.css';

import apiWeather from '../../img/apiWeatherExample.png';

import Tag from '../../components/Tag/Tag';
import ItemSquare from '../../components/MultiSquare/ItemSquare/ItemSquare';

function Home() {

    return (
        <div className={style.bodyToday}>
            <div className={style.apiWeather}>
                <img src={apiWeather} alt='Weather' />
            </div>    

            <div className={style.horizontalTags}>
                <Tag/>            
            </div> 

            <div className={style.itemGallery}>
                <ItemSquare/>
            </div>      
        </div>
    )
}

export default Home