import { db } from "../models/dbFLUR.mjs"

function decodeAuthBasic(headerContent) {
    try {
        const [method, token] = headerContent.split(" ");
        const tokenString = atob(token);
        const [name, password] = tokenString.split(":");
        return { method, name, password }
    } catch (error) {
        throw "Autenticación pocha";
    }
}

export function authMiddleware(request, response, next) {
    try {
        const { method, name, password } = decodeAuthBasic(request.headers.authorization);

        if (method != "Basic") throw "El método de autorización no furula, usa Basic neno."

        db.get(
            `SELECT * FROM users WHERE name = ? AND password = ?`,
            [name, password],
            (err, data) => {
                if (err) {
                    response.status(500);
                    response.send(err)
                } else if (data) {
                    next();
                } else {
                    console.error("Usuario inexistente o contraseña incorrecta")
                    response.sendStatus(401)
                }
            }
        )
     
    } catch (err) {
        console.error(err);
        response.sendStatus(500)
    }
}