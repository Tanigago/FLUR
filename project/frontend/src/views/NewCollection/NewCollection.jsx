function NewCollection () {
    return (
        <>
            <form>
                <h2>Nombre de colección
                    <input type="text" name="nombre" size="40" />
                </h2>
                <h2>Características</h2>
                <p>Nivel de abrigo:
                    <select name="warm">
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </p>
                <p>Nivel de impermeabilidad:
                    <select name="waterproof">
                        <option value="1">Bajo</option>
                        <option value="2">Medio</option>
                        <option value="3">Alto</option>
                    </select>
                </p>
                <p>Temporada:
                    <select name="season">
                        <option value="1">Primavera</option>
                        <option value="2">Verano</option>
                        <option value="3">Otoño</option>
                        <option value="4">Invierno</option>
                    </select>
                </p>
                <p>
                    <input type="done" value="Hecho"/>
                    <input type="cancel" value="Cancelar"/>
                </p>
            </form>
        </>
    )
}

export default NewCollection