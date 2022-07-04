import style from './todayStyle.module.css';

import apiWeather from '../../img/apiWeatherExample.png';

import ItemSquare from '../../components/MultiSquare/ItemSquare/ItemSquare';
import CollectionHorList from '../../components/CollectionHorList/CollectionHorList';

function Today({tagsArray}) {

    return (
        <div className={style.bodyToday}>
            <div className={style.apiWeather}>
                <img src={apiWeather} alt='Weather' />               
            </div>    

            <div className={style.horizontalTags}>
                <CollectionHorList collectionArray={tagsArray}/>
            </div> 

            <div className={style.itemGallery}>
                <ItemSquare/>
            </div>      
        </div>
    )
}

export default Today