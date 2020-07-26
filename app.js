import express from 'express'
import http from 'http'
import NetworkClass from './src/Network.js'
import DatabaseClass from './src/Database.js'
import LoginClass from './src/Login.js'

const SERVER_PORT = 3000
const DB_HOST = 'localhost'
const DB_PORT = 3306
const DB_DATABASE = 'godfield'
const DB_USERNAME = 'root'
const DB_PASSWORD = 'root'

const app = express()
const server = http.createServer(app)

const Database = new DatabaseClass(DB_HOST, DB_PORT, DB_DATABASE, DB_USERNAME, DB_PASSWORD)
const Network = new NetworkClass(server)
const Login = new LoginClass;

Network.subscribe(Login.checkForLogin)





/**
 * Public server stuff DO NOT 
 */
app.use(express.static('public'))
        
server.listen(SERVER_PORT, () => {
    console.log(`> Server listening to port ${SERVER_PORT}`)
})