import { collections } from "../models/collectionsModels.mjs"
import { db } from "../models/dbFLUR.mjs"

export function postCollectionController (request, response) {
    const { nameCollection, waterprooflvl, warmlvl, season } = request.body;
    db.run(
        `INSERT INTO collection(nameCollection, waterprooflvl, warmlvl, season) VALUES ("${nameCollection}", "${waterprooflvl}", "${warmlvl}", "${season}")`,
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
        `SELECT id, nameCollection, waterprooflvl, warmlvl, season FROM collections`,

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


export function putCollectionController (request, response) {
    const updatedCollection = request.body;
    const oldCollectionIdx = collections.findIndex(
        item => item.id === updatedCollection.id
    )
    tasks[oldCollectionIdx] = updatedCollection;
    response.sendStatus(200);
}

export function deleteCollectionController (request, response) {
    const updatedCollection = request.body;
    const oldCollectionIdx = tasks.findIndex(
        item => item.id === updatedCollection.id
    )
    tasks.splice(oldCollectionIdx,1);
    response.sendStatus(200)
}