import { db } from "../models/dbFLUR.mjs"
import { users } from "../models/usersModels.mjs";

export function postUserController(request, response) {
    const { name, password, email, photoProfile } = request.body;
    db.run(
        `INSERT INTO users(name, password, email, photoProfile) VALUES ("${name}", "${password}", "${email}", "${photoProfile}")`,
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
        `SELECT idUser, name, password, email, photoProfile FROM users`,
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
        `SELECT idUser, name, password, email, photoProfile FROM users WHERE idUser = ${request.params.id}`,
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

export function putUserController(request, response) {
    db.run(
        `UPDATE users SET name = "${request.body.name}", email ="${request.body.email}", photoProfile = "${request.body.photoProfile}" WHERE idUser = ${request.body.id}`,
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