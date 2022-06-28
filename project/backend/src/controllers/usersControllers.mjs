import { db } from "../models/dbFLUR.mjs"
import jwt from "jsonwebtoken";

function decodeBasicToken(headerContent) {
    try {
        const [method, token] = headerContent.split(" ");
        const tokenString = atob(token);
        const [name, password] = tokenString.split(":");
        return { method, name, password }
    } catch (error) {
        throw "Autenticación pocha";
    }
}

export function loginUserController (request, response) {
    const [ username, password ] = decodeBasicToken(req)
    if ( 
        username === user.username && password === user.password
    ) {
        const token = jwt.sign(
            {
                level: user.accessLevel
            },
            secret,
            {
                expiresIn: "1h",
            }
        )
        res.send(token)
    } else {
        res.sendStatus(401)
    }
}

export function postUserController(request, response) {
    const { name, password, email } = request.body;
    db.run(
        `INSERT INTO users(name, password, email) VALUES ("${name}", "${password}", "${email}")`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

export function getUsersController(request, response) {
    db.all(
        `SELECT idUser, name, password, email FROM users`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

export function getUserController(request, response) {
    db.all(
        `SELECT idUser, name, password, email FROM users WHERE idUser = ${request.params.id}`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)//token
            }
        }
    )
}

export function putUserController(request, response) {
    db.run(
        `UPDATE users SET name = "${request.body.name}", email ="${request.body.email}" WHERE idUser = ${request.body.id}`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}

export function deleteUserController(request, response) {
    db.run(
        `DELETE FROM users WHERE idUser =`+request.body.id,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}