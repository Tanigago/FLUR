import { db } from "../models/dbFLUR.mjs"
import jwt from "jsonwebtoken";
import { userSchema } from "../schemas/userSchemas.mjs";

export function loginUserController (req, res) {

    db.get(
        `SELECT idUser, name, password, email FROM users WHERE email = ? AND ?`,
        [req.body.email , req.body.password],
        (err, data) => {
            if (err) {
                console.error(err);
                res.sendStatus(500)
            } else {
                if (data === undefined) {
                    res.sendStatus(401);
                } else {
                    const token = jwt.sign(
                        {
                            name: data.name
                        },
                        "secret",
                        {
                            expiresIn: "1h",
                        }
                    )
                    res.send(token)
                }
            }
        },  
    )
}

export function postUserController(req, res) {
    const { name, password, email } = req.body;
    db.run(
        `INSERT INTO users(name, password, email) VALUES ("${name}", "${password}", "${email}")`,
        (err) => {
            if (err) {
                console.error(err);
                res.sendStatus(500)
            } else {
                res.sendStatus(201)
            }
        }
    )
}

export function getUsersController(req, res) {
    db.all(
        `SELECT idUser, name, password, email FROM users`,
        (err, data) => {
            if (err) {
                console.error(err);
                res.sendStatus(500)
            } else {
                res.json(data)
            }
        }
    )
}

export function getUserController(req, res) {
    db.all(
        `SELECT idUser, name, password, email FROM users WHERE idUser = ${req.params.id}`,
        (err, data) => {
            if (err) {
                console.error(err);
                res.sendStatus(500)
            } else {
                res.json(data)//token
            }
        }
    )
}

export function putUserController(req, res) {
    db.run(
        `UPDATE users SET name = "${req.body.name}", email ="${req.body.email}" WHERE idUser = ${req.body.id}`,
        (err) => {
            if (err) {
                console.error(err);
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }
    )
}

export function deleteUserController(req, res) {
    db.run(
        `DELETE FROM users WHERE idUser =`+req.body.id,
        (err) => {
            if (err) {
                console.error(err);
                res.sendStatus(500)
            } else {
                res.sendStatus(200)
            }
        }
    )
}