import sqlite3 from 'sqlite3';


export const db = new sqlite3.Database('./FLUR.db', (err) => {
    if (err) {
        console.error(err.flur);
    }
    console.log('Conectado a la base de datos de FLUR.');
});


db.run(`
    CREATE TABLE
        IF NOT EXISTS
        users(
            idUser INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            photoProfile TEXT
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        collection(
            idCollection INTEGER PRIMARY KEY,
            nameCollection TEXT NOT NULL,
            waterproofCollection TEXT NOT NULL,
            warmCollection TEXT NOT NULL,
            seasonCollection TEXT NOT NULL,
            userId INTEGER,
            collectionShoesId INTEGER,
            FOREIGN KEY (userId) REFERENCES users (idUser),
            FOREIGN KEY (collectionShoesId) REFERENCES collections_shoes(idCollectionShoes)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        shoes(
            idShoes INTEGER PRIMARY KEY,
            photoShoes TEXT NOT NULL,
            userdId INTEGER,
            collectionName INTEGER,
            FOREIGN KEY(collectionName) REFERENCES collections(nameCollection),
            FOREIGN KEY (userdId) REFERENCES users (idUser)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        collections_shoes(
            idCollectionShoes INTEGER PRIMARY KEY,
            idCollection INTEGER,
            idShoes INTEGER,
            FOREIGN KEY(idCollection) REFERENCES collections(idCollection),
            FOREIGN KEY(idShoes) REFERENCES shoes(idShoes)
        )
`);