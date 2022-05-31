import style from './newCollectionStyle.module.css'

function NewCollection() {
    return (
        <>
            <form>
                <h2>Nombre de colección
                    <input type="text" name="nombre" size="40" />
                </h2>
                <h2>Características</h2>

                <h4>Nivel de abrigo:</h4>
                <div class="input-warm">
                    <input id="warm-low" type="radio" name="warm" value="low" />
                    <label for="warm-low">Bajo</label>
                    <input id="warm-medium" type="radio" name="warm" value="medium" />
                    <label for="warm-medium">Medio</label>
                    <input id="warm-high" type="radio" name="warm" value="high" />
                    <label for="warm-high">Alto</label>
                </div>

                <h4>Nivel de impermeabilidad:</h4>
                <div class="input-waterproof">
                    <input id="waterproof-low" type="radio" name="waterproof" value="low" />
                    <label for="waterproof-low">Bajo</label>
                    <input id="waterproof-medium" type="radio" name="waterproof" value="medium" />
                    <label for="waterproof-medium">Medio</label>
                    <input id="waterproof-high" type="radio" name="waterproof" value="high" />
                    <label for="waterproof-high">Alto</label>
                </div>

                <h4>Temporada:</h4>
                <div class="input-season">
                    <input id="season-spring" type="radio" name="season" value="spring" />
                    <label for="season-spring">Primavera</label>
                    <input id="season-summer" type="radio" name="season" value="summer" />
                    <label for="season-summer">Verano</label>
                    <input id="season-autumn" type="radio" name="season" value="autumn" />
                    <label for="season-autumn">Otoño</label>
                    <input id="season-winter" type="radio" name="season" value="winter" />
                    <label for="season-winter">Invierno</label>
                </div>

                <div className={style.savecanButtons}>
                    <input type="done" value="Guardar" />
                    <input type="cancel" value="Cancelar" />
                </div>
            </form>
        </>
    )
}

export default NewCollection