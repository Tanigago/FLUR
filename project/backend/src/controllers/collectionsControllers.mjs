import { collections } from "../models/collectionsModels.mjs"
import { db } from "../models/dbFLUR.mjs"

export function postCollectionController (request, response) {
    const { userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season } = request.body;
    db.run(
        `INSERT INTO collection(userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season) VALUES (?, ?,?,?,?,?)`,
        [userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season],
        (err)=>{
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

export function getCollectionsController (request, response) {
    db.all(
        `SELECT idCollection, userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season FROM collection`,

        (err,data)=>{
            if ( err ) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

export function getCollectionController (request, response) {
    try {
        const collection = collections.find(
            item => item.id === parseInt(request.params.id)
        )
        if ( task ) response.json(task)
        else response.sendStatus(404);
    } catch (err) {
        response.sendStatus(400)
    }
}


export function putCollectionController(request, response) {
    db.run(
        `UPDATE collection
        SET nameCollection = "${request.body.nameCollection}",
            waterprooflvl ="${request.body.waterprooflvl}",
            warmlvl ="${request.body.warmlvl}",
            season ="${request.body.season}"
        WHERE idCollection = ${request.body.id}`,
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

export function deleteCollectionController(request, response) {
    db.run(
        `DELETE FROM collection WHERE idCollection =`+request.body.id,
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