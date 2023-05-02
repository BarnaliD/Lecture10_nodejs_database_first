/*
To start a new project
npm-init -y
npm install veter-sqlite3
*/

// 1.Import the database driver
const dataBaseDriver = require('better-sqlite3');

// 2.Connect to database
const db = dataBaseDriver('Bands.sqlite3');

// 3.Send our first query,prepare a statment
let statement =db.prepare('SELECT * FROM bands');

// Execute a statement,receive results
let results = statement.all();

//5.check the result
console.log(results);

// 5. Using parameters - First way
let statement2 = db.prepare(`
    SELECT * FROM bands WHERE genre = ?
    `);

let result2 = statement2.all('Metal');
//console.log(result2);

//Using named parameters
let statement3 = db.prepare(`
    SELECT * FROM bands WHERE genre = :genre
`);

let result3 = statement3.all({
    genre : 'Rock'
});

//console.log(result3);

// Insert statement
let table = 'bands';
/*let insertStatement = db.prepare(`
    INSERT INTO ${table} (name,genre) VALUES(:name, :genre)
`);

let resultOfInsert = insertStatement.run({
    name: 'Bathrony',
    genre: 'Metal'
});

console.log(resultOfInsert);*/