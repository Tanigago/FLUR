import { users } from "../models/usersModels.mjs";
import { collections } from "../models/collectionsModels.mjs";

export function requestLog ( request, response, next ) {
    next();
    const { url, method, body } = request
    console.log( method, url, body );
    console.log("Usuarios:", users);
    console.log("Colleciones:", collections);
}