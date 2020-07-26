class Database {
    constructor(hostname, port = 3306, database, username, password) {
        this.hostname = hostname
        this.port = port
        this.database = database
        this.username = username
        this.password = password
    }

    loginCheck(data) {
        console.log('Checking if user has logged in yet...')
        console.log(data)
    }

    notifyAll() {

    }

    subscribe() {

    }
} export default Database