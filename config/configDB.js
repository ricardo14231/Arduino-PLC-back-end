const mysql = require('mysql');


const connection = mysql.createConnection({
    host: "localhost",
    user: "arduino",
    password: "12348765",
    database: "arduino-plc"
});

connection.connect((error) => {
    if(error)
        return console.log("Erro na conecção com o db: " + error);
    console.log("Database on!");
    
});


module.exports = { connection };