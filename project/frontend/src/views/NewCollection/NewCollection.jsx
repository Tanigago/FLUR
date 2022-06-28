import { useState } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'
import { getNewCollection } from '../../fetchLibrary'
import style from './newCollectionStyle.module.css'

function NewCollection() {

    const [nombreColeccion, setNombreColeccion] = useState()
    const [warmLvl, setWarmLvl] = useState("low")
    const [waterproofLvl, setWaterproofLvl] = useState("low")
    const [seasonLvl, setSeasonLvl] = useState("spring")

    const onValueChange = e => {
        setWarmLvl(e.target.value)
    }

    const onOptionChange = e => {
        setWaterproofLvl(e.target.value)
    }

    const onCheckChange = e => {
        setSeasonLvl(e.target.value)
    }

    function onChangeNombreColeccion(ev) {
        setNombreColeccion(ev.target.value)
    };

    async function formSubmit(ev, nombre, warm, waterproof, season) {
        ev.preventDefault();
        const collection = await getNewCollection(nombre, warm, waterproof, season)
        swal({
            title: "¡Genial!",
            text: "Inicia sesión y disfruta ;)",
            icon: "success",
        });
        //navigate(`/collection/${collection.id}`)
    };

    return (
        <>
            <form onSubmit={formSubmit}>
                <h2>Nombre de colección
                    <input type="text" name="nombre" size="40" value={nombreColeccion} onChange={onChangeNombreColeccion} />
                </h2>

                <h2>Características</h2>

                <h4>Nivel de abrigo:</h4>
                <div className={style.inputwarm}>
                    <input id="warm-low" type="radio" name="warm" value="low"
                        checked={warmLvl === "low"}
                        onChange={onValueChange} />
                    <label htmlFor="warm-low">Bajo</label>

                    <input id="warm-medium" type="radio" name="warm" value="medium"
                        checked={warmLvl === "medium"}
                        onChange={onValueChange} />
                    <label htmlFor="warm-medium">Medio</label>

                    <input id="warm-high" type="radio" name="warm" value="high"
                        checked={warmLvl === "high"}
                        onChange={onValueChange} />
                    <label htmlFor="warm-high">Alto</label>
                </div>

                <h4>Nivel de impermeabilidad:</h4>
                <div className={style.inputwaterproof}>
                    <input id="waterproof-low" type="radio" name="waterproof" value="low"
                        checked={waterproofLvl === "low"}
                        onChange={onOptionChange} />
                    <label htmlFor="waterproof-low">Bajo</label>

                    <input id="waterproof-medium" type="radio" name="waterproof" value="medium"
                        checked={waterproofLvl === "medium"}
                        onChange={onOptionChange} />
                    <label htmlFor="waterproof-medium">Medio</label>

                    <input id="waterproof-high" type="radio" name="waterproof" value="high"
                        checked={waterproofLvl === "high"}
                        onChange={onOptionChange} />
                    <label htmlFor="waterproof-high">Alto</label>
                </div>

                <h4>Temporada:</h4>
                <div className={style.inputseason}>
                    <input id="season-spring" type="radio" name="season" value="spring"
                        checked={seasonLvl === "spring"}
                        onChange={onCheckChange} />
                    <label htmlFor="season-spring">Primavera</label>

                    <input id="season-summer" type="radio" name="season" value="summer"
                        checked={seasonLvl === "summer"}
                        onChange={onCheckChange} />
                    <label htmlFor="season-summer">Verano</label>

                    <input id="season-autumn" type="radio" name="season" value="autumn"
                        checked={seasonLvl === "autumn"}
                        onChange={onCheckChange} />
                    <label htmlFor="season-autumn">Otoño</label>

                    <input id="season-winter" type="radio" name="season" value="winter"
                        checked={seasonLvl === "winter"}
                        onChange={onCheckChange} />
                    <label htmlFor="season-winter">Invierno</label>
                </div>

                <div className={style.savecanButtons}>
                    <button type="done" value="Guardar">Guardar</button>

                    <Link to="/collections/">
                        <button type="button" value="Cancelar">Cancelar</button>
                    </Link>
                </div>
            </form>
        </>
    )
}

export default NewCollection