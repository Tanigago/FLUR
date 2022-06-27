import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getNewCollection } from '../../fetchLibrary'
import style from './newCollectionStyle.module.css'

function NewCollection() {

    const [nombreColeccion, setNombreColeccion] = useState()

    function onChangeNombreColeccion (ev) {
        setNombreColeccion(ev.target.value)
    };

    function onValueChange(ev) {
        this.setState({
          selectedOption: ev.target.value
        });
    };

    function formSubmit(ev) {
        ev.preventDefault();
        console.log(this.state.selectedOption)
        //const collection = await getNewCollection(nombre, warm, waterproof, season)
        //navigate(`/collection/${collection.id}`)

    };

/*
    async function onSubmit () {
        const collection = await getNewCollection(nombre, warm, waterproof, season)
        navigate(`/collection/${collection.id}`)
    }
*/

    return (
        <>
            <form onSubmit={formSubmit}>
                <h2>Nombre de colección
                    <input type="text" name="nombre" size="40" value={nombreColeccion} onChange={onChangeNombreColeccion} />
                </h2>
                <h2>Características</h2>

                <h4>Nivel de abrigo:</h4>
                <div class="input-warm">
                    <input id="warm-low" type="radio" name="warm" value="low"
                    checked={this.state.selectedOption === "low"}
                    onChange={onValueChange}/>
                    <label for="warm-low">Bajo</label>

                    <input id="warm-medium" type="radio" name="warm" value="medium"
                    checked={this.state.selectedOption === "medium"}
                    onChange={onValueChange}/>
                    <label for="warm-medium">Medio</label>

                    <input id="warm-high" type="radio" name="warm" value="high"
                    checked={this.state.selectedOption === "high"}
                    onChange={onValueChange}/>                    
                    <label for="warm-high">Alto</label>
                </div>

                <h4>Nivel de impermeabilidad:</h4>
                <div class="input-waterproof">
                    <input id="waterproof-low" type="radio" name="waterproof" value="low"
                    checked={this.state.selectedOption === "low"}
                    onChange={onValueChange}/>
                    <label for="waterproof-low">Bajo</label>

                    <input id="waterproof-medium" type="radio" name="waterproof" value="medium"
                    checked={this.state.selectedOption === "medium"}
                    onChange={onValueChange}/>
                    <label for="waterproof-medium">Medio</label>

                    <input id="waterproof-high" type="radio" name="waterproof" value="high"
                    checked={this.state.selectedOption === "high"}
                    onChange={onValueChange}/>
                    <label for="waterproof-high">Alto</label>
                </div>

                <h4>Temporada:</h4>
                <div class="input-season">
                    <input id="season-spring" type="radio" name="season" value="spring"
                    checked={this.state.selectedOption === "spring"}
                    onChange={onValueChange}/>
                    <label for="season-spring">Primavera</label>

                    <input id="season-summer" type="radio" name="season" value="summer"
                    checked={this.state.selectedOption === "summer"}
                    onChange={onValueChange}/>
                    <label for="season-summer">Verano</label>

                    <input id="season-autumn" type="radio" name="season" value="autumn"
                    checked={this.state.selectedOption === "autumn"}
                    onChange={onValueChange}/>
                    <label for="season-autumn">Otoño</label>

                    <input id="season-winter" type="radio" name="season" value="winter"
                    checked={this.state.selectedOption === "winter"}
                    onChange={onValueChange}/>
                    <label for="season-winter">Invierno</label>
                </div>

                <div className={style.savecanButtons}>
                    <input type="done" value="Guardar" />
                    <Link to="/collections/"><input type="cancel" value="Cancelar" /></Link>
                </div>
            </form>
        </>
    )
}

export default NewCollection