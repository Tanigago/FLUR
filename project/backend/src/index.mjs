import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';

if (process.env.NODE_ENV !== 'production') config();

import {
    sqlCallback,
    findUser,
    findCollection,
    findShoes,
    insertUser,
    insertCollection,
    insertShoes,
    getUsers,
    getCollections,
    getShoes
} from "./models/dbFLUR.mjs";

const app = express();
app.use(express.json());
app.use(cors());

// Nuestro modelo de datos.
class User {
    constructor (name, email, password, photoProfile) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.photoProfile = photoProfile;
        this.idUser = Date.now();
    }
}

class Collection {
    constructor (nameCollection, waterproofCollection, warmCollection, seasonCollection) {
        this.nameCollection = nameCollection;
        this.waterproofCollection = waterproofCollection;
        this.warmCollection = warmCollection;
        this.seasonCollection = seasonCollection;
        this.idCollection = Date.now();
    }
}

class Shoes {
    constructor (photoProfile) {
        this.photoProfile = photoProfile;
        this.idShoes = Date.now();
    }
}
const users = [];
const collection = [];
const shoes = [];

function decodeBasicToken(request) {
    const [ authType, b64token ] = request.headers.authorization.split(" ",2);
    const token = atob(b64token);
    return token.split(":",2);
}

function authMiddleware (request, response, next) {
    try {
        if ( ! request.headers.authorization ) {
            response.status(401);
            response.send(`Authentication requiered.`);
            return
        } else {
            const [ authType, b64token ] = request.headers.authorization.split(" ",2);
            if ( authType !== "Basic") {
                response.status(400);
                response.send(`Unknown authentication type: ${authType}`);
                return
            };
        };
    } catch (err) {
        response.status(500)
        response.send(err)
        return
    }
}

app.post('/login/', (request, response) => {
    try {
        const { userName, password } = request.body;
        if ( ! userName || ! password ) {
            response.status(400)
            response.send("Must provide 'userName' and 'password' JSON");
            return
        }
        findUser(userName, password, (error, data)=>{
            if (error) {
                console.error(error)
                throw error;
            }
            if ( data ) {
                response.status(401);
                response.send("Usuario ya registrado");
                return
            } else {
                const newUser = new User(userName, password);
                insertUser(newUser,sqlCallback);
                const json = JSON.stringify(newUser.id)
                response.send(json);
                return
            }
        });
    } catch (err) {
        response.status(500)
        response.send(err)
        return
    }
});

app.get('/users/', (request, response)=>{
    try {
        getUsers((error, data)=>{
            if ( error ) {
                console.error(error);
                response.status(500)
                response.send("Database error.")
                return
            }
            if ( data ){
                const json = JSON.stringify(data)
                response.send(json);
                return
            }
        });
    } catch (err) {
        response.status(500)
        response.send(err)
        return
    }
});

app.post('/collection/', authMiddleware, (request, response) => {
    try {
        const [ collection ] =  decodeBasicToken(request)
        const { content } = request.body;
        if ( ! collection || ! content ) {
            response.status(400)
            response.send("Must provide a valid authentication token and a 'content' JSON");
            return
        }
        const newCollection = new Message(collection, content);
        insertMessage(newCollection);
        getLastMessages(1, (error, data)=>{
            if ( error ) {
                console.error(error);
                response.status(500)
                response.send("Database error.")
                return
            }
            if ( data ) {
                response.json(data);
                response.send();
                return
            }
        })
    } catch (err) {
        response.status(500)
        response.send(err)
        return
    }
});

app.get('/collections/', authMiddleware, (request, response) => {
    try {
        getCollections(15, (error, data)=>{
            if ( error ) {
                console.error(error);
                response.status(500)
                response.send("Database error.")
                return
            }
            if ( data ) {
                response.json(data);
                response.send();
                return
            }
        })
    } catch (err) {
        response.status(500)
        response.send(err)
        return
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on http://127.0.0.1:${process.env.PORT}`)
})