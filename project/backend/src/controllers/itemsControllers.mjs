import { db } from "../models/dbFLUR.mjs"

export function postItemController(request, response) {
    const { idShoes, photoShoes, userId, collectionName } = request.body;
    db.run(
        `INSERT INTO shoes(photoShoes, userId, collectionName) VALUES (?,?,?)`,
        [photoShoes, collectionName, userId],
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

export function getItemsController(request, response) {
    db.all(
        `SELECT idShoes, photoShoes, userId, collectionName FROM shoes`,

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

export function getItemController(request, response) {
    db.all(
        `SELECT idShoes, photoShoes, userId, collectionName FROM shoes WHERE idShoes = ${request.params.id}`,
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


export function putItemController(request, response) {
    db.run(
        `UPDATE shoes
        SET photoShoes = "${request.body.photoShoes}",
            collectionName ="${request.body.collectionName}",
            userId ="${request.body.userId}"
        WHERE idShoes = ${request.body.idShoes}`,
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

export function deleteItemController(request, response) {
    db.run(
        `DELETE FROM shoes WHERE idShoes =` + request.body.idShoes,
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