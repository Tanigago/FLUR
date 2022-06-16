import { validate } from "jsonschema";

import { userSchema } from "../schemas/userSchemas.mjs";
import { collectionSchema, putCollectionSchema } from "../schemas/collectionSchemas.mjs";
import { itemSchema, putItemSchema } from "../schemas/itemSchema.mjs"

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

export function validatePutCollectionJSON(request, response, next) {
    try {
        const validation = validate(request.body, putCollectionSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided (put)");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateItemJSON(request, response, next) {
    try {
        const validation = validate(request.body, itemSchema)
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

export function validatePutItemJSON(request, response, next) {
    try {
        const validation = validate(request.body, putItemSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided (put)");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}