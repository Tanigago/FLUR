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
}