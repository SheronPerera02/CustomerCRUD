const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'Task2Database'
});

connection.connect((err)=>{
    if(err){
        console.log('Failed to connect to the database!');
    } else{
        console.log('Connected to the database!');
    }
});

module.exports = connection;