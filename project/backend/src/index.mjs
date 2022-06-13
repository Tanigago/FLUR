import express from "express";

import { authMiddleware } from "./middleware/authorization.mjs";
import { requestLog } from "./middleware/requestLog.mjs";
import { validateUserJSON } from "./middleware/jsonValidator.mjs";

import { postUserController, getUsersController, putUserController, deleteUserController } from "./controllers/usersControllers.mjs";
import { deleteCollectionController, getCollectionController, getCollectionsController, postCollectionController, putCollectionController } from "./controllers/collectionsControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
try {
    const jsonParser = express.json();
    app.use(requestLog);

    app.post(PATH_PREFIX+"/user/", jsonParser, validateUserJSON, postUserController);
    app.get(PATH_PREFIX+"/user/:id", jsonParser, getUsersController);
    app.get(PATH_PREFIX+"/users/", jsonParser, getUsersController);
    app.put(PATH_PREFIX+"/user/", jsonParser, putUserController);
    app.delete(PATH_PREFIX+"/user/", jsonParser, deleteUserController);

    app.post(PATH_PREFIX+"/collection/", authMiddleware, jsonParser, postCollectionController);
    app.get(PATH_PREFIX+"/collection/:id", authMiddleware, getCollectionController);
    app.get(PATH_PREFIX+"/collections/", authMiddleware, getCollectionsController);
    app.put(PATH_PREFIX+"/collection/", authMiddleware, jsonParser, putCollectionController);
    app.delete(PATH_PREFIX+"/collection/", authMiddleware, jsonParser, deleteCollectionController);

    app.listen(process.env.PORT || 3000,()=>{
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}

import express from "express";

import { authMiddleware } from "./middleware/authorization.mjs";
import { validateUserJSON, validateNewTaskJSON, validateTaskJSON, validateDeleteTaskJSON } from "./middleware/jsonValidator.mjs";

import { postUserController, getUsersController, deleteUserController, putUserController } from "./controllers/usersControllers.mjs";
import { deleteTaskController, getTasksController, postTaskController, putTaskController } from "./controllers/tasksControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
try {
    const jsonParser = express.json();

    app.post(PATH_PREFIX + "/users/", jsonParser, validateUserJSON, postUserController);
    app.get(PATH_PREFIX + "/users/", jsonParser, getUsersController);
    app.delete(PATH_PREFIX + "/users/", jsonParser, deleteUserController);
    app.put(PATH_PREFIX + "/users/", jsonParser, putUserController);

    app.get(PATH_PREFIX + "/tasks/", authMiddleware, getTasksController);
    app.post(PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateNewTaskJSON, postTaskController);
    app.put(PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateTaskJSON, putTaskController);
    app.delete(PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateDeleteTaskJSON, deleteTaskController);

    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}