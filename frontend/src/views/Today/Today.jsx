import style from './todayStyle.module.css';

import apiWeather from '../../img/apiWeatherExample.png';
import MenuTop from "../../components/MenuTop/MenuTop";
import ItemSquare from '../../components/MultiSquare/ItemSquare/ItemSquare';
import CollectionHorList from '../../components/CollectionHorList/CollectionHorList';
import MenuBottom from '../../components/MenuBottom/MenuBottom';

function Today({tagsArray}) {

    return (
        <>
            <MenuTop insitu={"¿Qué me pongo hoy?"}/>

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

            <MenuBottom/>
        </>
    )
}

export default Today