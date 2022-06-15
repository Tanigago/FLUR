import express from "express";

import { authMiddleware } from "./middleware/authorization.mjs";
import { validateCollectionJSON, validatePutCollectionJSON, validateUserJSON } from "./middleware/jsonValidator.mjs";

import { postUserController, getUsersController, putUserController, deleteUserController, getUserController } from "./controllers/usersControllers.mjs";
import { deleteCollectionController, getCollectionController, getCollectionsController, postCollectionController, putCollectionController } from "./controllers/collectionsControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
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

    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}