//FETCH POST NUEVOS REGISTROS
export async function postUser (nombre, correo, pass) {
    const res = await fetch('http://localhost:3000/api/v0.0/user/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            { 
                name: nombre,
                email: correo,
                password: pass 
            })
    })
};

//FETCH GET INICIO SESIÓN

export async function getUser (correo, pass) {
    const res = await fetch('http://localhost:3000/api/v0.0/user/', {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            { 
                email: correo,
                password: pass 
            })
    })
};

//FETCH POST NUEVA COLECCIÓN

export async function getNewCollection (nombre, warm, waterproof, season) {
    const res = await fetch('http://localhost:3000/api/v0.0/collection/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(
            {
                nameCollection: nombre,
                warmlvl: warm,
                waterprooflvl: waterproof,
                season: season
            })
    })
    return await res.json()
};