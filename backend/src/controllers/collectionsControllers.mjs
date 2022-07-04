import { collections } from "../models/collectionsModels.mjs"
import { db } from "../models/dbFLUR.mjs"

export function postCollectionController (request, response) {
    const { userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season } = request.body;
    db.run(
        `INSERT INTO collection(userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season) VALUES (?,?,?,?,?,?)`,
        [userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season],
        (err)=>{
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                db.get("SELECT last_insert_rowid()",(err, data) =>{
                response.json(data)
                })
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

export function getCollectionController(request, response) {
    db.all(
        `SELECT idCollection, userId, collectionShoesId, nameCollection, waterprooflvl, warmlvl, season FROM collection WHERE idCollection = ${request.params.id}`,
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


export function putCollectionController(request, response) {
    db.run(
        `UPDATE collection
        SET nameCollection = "${request.body.nameCollection}",
            waterprooflvl ="${request.body.waterprooflvl}",
            warmlvl ="${request.body.warmlvl}",
            season ="${request.body.season}"
        WHERE idCollection = ${request.body.idCollection}`,
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