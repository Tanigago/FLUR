import express from "express";
import { config } from 'dotenv'
import aws from 'aws-sdk'

import { authMiddleware } from "./middleware/authorization.mjs";
import { validateCollectionJSON, validateItemJSON, validatePutCollectionJSON, validatePutItemJSON, validateUserJSON } from "./middleware/jsonValidator.mjs";

import { postUserController, getUsersController, putUserController, deleteUserController, getUserController } from "./controllers/usersControllers.mjs";
import { deleteCollectionController, getCollectionController, getCollectionsController, postCollectionController, putCollectionController } from "./controllers/collectionsControllers.mjs";
import { deleteItemController, getItemController, getItemsController, postItemController, putItemController } from "./controllers/itemsControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();

if (process.env.NODE_ENV !== "production") config()

const s3 = new aws.S3({
    apiVersion: process.env.S3_API_VERSION,
    endpoint: process.env.S3_ENDPOINT,
    signatureVersion: process.env.S3_SIGNATURE_VERSION,
})



try {
    const jsonParser = express.json();

    app.post(PATH_PREFIX + "/user/", jsonParser, validateUserJSON, postUserController);
    app.get(PATH_PREFIX + "/user/:id", jsonParser, getUserController);
    app.get(PATH_PREFIX + "/users/", jsonParser, getUsersController);
    app.put(PATH_PREFIX + "/user/", jsonParser, putUserController);
    app.delete(PATH_PREFIX + "/user/", jsonParser, deleteUserController);

    app.post(PATH_PREFIX + "/collection/", authMiddleware, jsonParser, validateCollectionJSON, postCollectionController);
    app.get(PATH_PREFIX + "/collection/:id", authMiddleware, getCollectionController);
    app.get(PATH_PREFIX + "/collections/", authMiddleware, getCollectionsController);
    app.put(PATH_PREFIX + "/collection/", authMiddleware, jsonParser, validatePutCollectionJSON, putCollectionController);
    app.delete(PATH_PREFIX + "/collection/", authMiddleware, jsonParser, deleteCollectionController);

    app.post(PATH_PREFIX + "/item/", authMiddleware, jsonParser, validateItemJSON, postItemController);
    app.get(PATH_PREFIX + "/item/:id", authMiddleware, getItemController);
    app.get(PATH_PREFIX + "/items/", authMiddleware, getItemsController);
    app.put(PATH_PREFIX + "/item/", authMiddleware, jsonParser, validatePutItemJSON, putItemController);
    app.delete(PATH_PREFIX + "/item/", authMiddleware, jsonParser, deleteItemController);

    app.post(PATH_PREFIX + "/upload/:imgId", authMiddleware, async (req, res) => {
        try {

            const s3ObjectKey = Date.now().toString()

            const s3Response = s3.upload({
                Bucket: process.env.S3_BUCKET,
                Key: s3ObjectKey,
                Body: req,
                ContentType: req.headers['content-type'],
                ContentLength: req.headers['content-length']
            })

            const data = await s3Response.promise()

            const imgIdx = mockedDB.findIndex(
                item => item.id === req.params.imgId
            )

            mockedDB[imgIdx].imageKey = data.Key
            mockedDB[imgIdx].imagePublicURL = data.Location

            res.sendStatus(201)

        } catch (err) {
            console.error(err)
            res.sendStatus(500)
        }

    })
    app.get(PATH_PREFIX + "/images/:imgId", authMiddleware);

    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}