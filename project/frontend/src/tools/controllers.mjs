import { HOST } from "./defines.mjs"

function dataToString(dataAtTrasf) {
    const jsonData = JSON.stringify(dataAtTrasf);
    const params = {
        method: 'POST',
        body: jsonData,
        headers: {
            "Content-Type": "application/json"
        }
    };
    return params;
}


//FETCH POST PARA EL REGISTRO

export async function postUser(data) {
    const params = dataToString(data);
    const response = await fetch(
        HOST + '/api/v0.0/user/',
        params
    );
    return await response.json();
}

//FETCH GET PARA OBTENER USUARIO
export async function getUsers(HOST) {
    const response = await fetch(HOST + '/api/v0.0/users/');
    const data = await response.json();
    return data;
}

//FETCH POST PARA EL LOGIN
export async function logingUser(data) {
    const params = dataToString(data);
    const response = await fetch(
        HOST + '/api/v0.0/login/',
        params
    );
    return await response.json();
}

//FETCH POST PARA NUEVA COLECCIÓN
export async function getNewCollection(nombre, warm, waterproof, season) {
    const response = await fetch(
        HOST + '/api/v0.0/collection/',
         {
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
    return await response.json()
};