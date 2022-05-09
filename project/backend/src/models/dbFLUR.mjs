import sqlite3 from 'sqlite3';


export const db = new sqlite3.Database('./FLUR.db', (err)=> {
    if (err) {
        console.error(err.flur);
    }
    console.log('Conectado a la base de datos de FLUR.');
});


db.run(`
    CREATE TABLE
        IF NOT EXISTS
        users(
            idUser INTEGRER PRIMARY KEY AUTO_INCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
            photoProfile TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        collections(
            idCollection INTEGRER PRIMARY KEY AUTO_INCREMENT,
            nameCollection TEXT NOT NULL,
            FOREIGN KEY(idUser) references users(idUser)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        shoes(
            idShoes INTEGRER PRIMARY KEY AUTO_INCREMENT,
            photoShoes TEXT NOT NULL,
            FOREIGN KEY(idUser) references users(idUser)
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        collections_shoes(
            idCollectionShoes INTEGRER PRIMARY KEY AUTO_INCREMENT,
            idCollection INTEGRER PRIMARY KEY AUTO_INCREMENT,
            idShoes INTEGRER PRIMARY KEY AUTO_INCREMENT,
            FOREIGN KEY(idCollection) references collections(idCollection),
            FOREIGN KEY(idShoes) references shoes(idShoes)


        )
`)