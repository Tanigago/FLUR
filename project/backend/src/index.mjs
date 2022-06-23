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
/*
const s3 = new aws.S3({
    apiVersion: process.env.S3_API_VERSION,
    endpoint: process.env.S3_ENDPOINT,
    signatureVersion: process.env.S3_SIGNATURE_VERSION,
})
*/
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


    app.post("/upload/:fileId", async (req, res)=>{
        try {

            const accessKeyId = "jwam7w5d7bdobgnjpijjfhsqzzyq";
            const secretAccessKey = "jzd5zk3un2urva7fp72ic336two6mizd5zmk2gffvqmsv3ssd27uo";
            const endpoint = "https://gateway.storjshare.io";
    
            const s3 = new aws.S3({
                endpoint: process.env.S3_ENDPOINT,
                s3ForcePathStyle: true,
                signatureVersion: process.env.S3_SIGNATURE_VERSION,
                connectTimeout: 0,
                httpOptions: { timeout: 0 },
            });
    
            const s3Response = s3.upload({
                Bucket: process.env.S3_BUCKET,
                Key: req.params.fileId,
                Body: req,
                ContentType: req.headers['content-type'],
                ContentLength: req.headers['content-length'],
            })
    
            const data = await s3Response.promise()
            console.log(data);
    
            res.sendStatus(201)
    
    
        } catch (err) {
            console.error(err)
            res.sendStatus(500)
        }
    })
    
   
    app.get(PATH_PREFIX + "/images/:imgId", authMiddleware);

    app.listen(process.env.PORT || 4000, () => {
        console.log("Express running...");
    });

} catch (err) {
    console.error(err);
}