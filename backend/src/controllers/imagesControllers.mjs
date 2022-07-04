import { images } from "../models/imagesModels.mjs"
import { db } from "../models/dbFLUR.mjs"

/*
export function postImageController(request, response) {
    const { imgId } = request.body;
    db.run(
        `INSERT INTO collection(userId) VALUES (?)`,
        [imgId],
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

export function getImageController(request, response) {
    db.all(
        `SELECT idCollection FROM collection WHERE idCollection = ${request.params.id}`,
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
*/