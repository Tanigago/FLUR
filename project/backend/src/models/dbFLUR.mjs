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
            idUser INTEGER AUTO_INCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            photoProfile TEXT,
            PRIMARY KEY (idUser)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        collection(
            idCollection INTEGER AUTO_INCREMENT,
            nameCollection TEXT NOT NULL,
            waterproofCollection TEXT NOT NULL,
            warmCollection TEXT NOT NULL,
            seasonCollection TEXT NOT NULL,
            userdId INTEGER,
            collectionShoesId INTEGER,
            FOREIGN KEY (userdId) REFERENCES users (idUser),
            FOREIGN KEY (collectionShoesId) REFERENCES collections_shoes(idCollectionShoes),
            PRIMARY KEY (idCollection)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        shoes(
            idShoes INTEGER AUTO_INCREMENT,
            photoShoes TEXT NOT NULL,
            userdId INTEGER,
            FOREIGN KEY (userdId) REFERENCES users (idUser),
            PRIMARY KEY (idShoes)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        collections_shoes(
            idCollectionShoes INTEGER AUTO_INCREMENT,
            idCollection INTEGER AUTO_INCREMENT,
            idShoes INTEGER AUTO_INCREMENT,
            FOREIGN KEY(idCollection) REFERENCES collections(idCollection),
            FOREIGN KEY(idShoes) REFERENCES shoes(idShoes)


        )
`);

export function sqlCallback(error, data) {
    console.log("error:", error, "data:", data);
    if (error) throw error;
}

export function findUser(name, password, callback) {
    db.get(`
        SELECT idUser
        FROM users
        WHERE name ="${name}" AND password = "${password}"
        `,
        callback
    )
}

export function findCollection(idCollection, callback) {
    db.get(`
        SELECT *
        FROM collection
        WHERE idCollection = "${idCollection}"
        `,
        callback
    )
}

export function findShoes (idShoes, callback) {
    db.get(`
        SELECT *
        FROM shoes
        WHERE idShoes = "${idShoes}"
        `,
        callback
    )
}

export function insertUser ( userObject, callback ) {
    const { idUser, name, email, password, photoProfile } = userObject;
    const sql = `
        INSERT INTO users (idUser, name, email, password)
        values (${idUser}, "${name}", "${email}", "${password}", "${photoProfile}");
    `;
    db.run(sql,callback);
}
export function insertCollection ( collectionOBject, callback) {
    const { idCollection, nameCollection, waterproofCollection, warmCollection, seasonCollection } = collectionOBject;
    const sql = `
        INSERT INTO collection (idCollection, nameCollection, waterproofCollection, warmCollection, seasonCollection)
        values (${idCollection}, "${nameCollection}", "${waterproofCollection}", "${warmCollection}", "${seasonCollection}");
    `;
    db.run(sql,callback);
}

export function insertShoes ( shoesOBject, callback) {
    const { idShoes, photoShoes } = shoesOBject;
    const sql = `
        INSERT INTO shoes (idShoes, photoShoes)
        values (${idShoes}, "${photoShoes}");
    `;
    db.run(sql,callback);
}

export function getUsers ( callback ) {
    db.all("SELECT idUser, name FROM users", callback);
}

export function getCollections ( callback ) {
    db.all("SELECT idCollection, name FROM collection", callback);
}

export function getShoes ( callback ) {
    db.all("SELECT idShoes, name FROM shoes", callback);
}