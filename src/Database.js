import mysql from 'mysql'

class Database {

    static observers = []

    constructor(hostname, port = 3306, database, username, password) {
        this.hostname = hostname
        this.port = port
        this.database = database
        this.username = username
        this.password = password

        this.createConnection()
    }

    createConnection() {

        this.connection = mysql.createConnection({
            host: this.host,
            database: this.database,
            user: this.username,
            password: this.password,
        })

        this.connection.connect(function(err) { if (err) { console.error('Error connecting: ' + err.stack); return; } console.log('Connected as id ' + connection.threadId); })
        

        console.log(this.connection)
    }

    // var mysql = require('mysql');
    // var connection = mysql.createConnection({ host : 'localhost', database : 'dbname', user : 'username', password : 'password', });
    // connection.connect(function(err) { if (err) { console.error('Error connecting: ' + err.stack); return; } console.log('Connected as id ' + connection.threadId); });
    // connection.query('SELECT * FROM employee', function (error, results, fields) { if (error) throw error; results.forEach(result => { console.log(result); }); });
    // connection.end();


    loginCheck(data) {
        console.log('> Checking if user has logged in yet...')
    }

    static notifyAll() {

    }

    static subscribe() {

    }
} export default Database