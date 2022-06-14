import { validate } from "jsonschema";

import { collectionSchema } from "../schemas/collectionSchemas.mjs";
import { userSchema } from "../schemas/userSchemas.mjs";

export function validateUserJSON(request, response, next) {
    try {
        const validation = validate(request.body, userSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateCollectionJSON(request, response, next) {
    try {
        const validation = validate(request.body, collectionSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}