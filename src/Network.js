import express from 'express'
import http from 'http'
import socketio from 'socket.io'

class Network {
    
    observers = []
    
    data = {}

    constructor() {
        console.log('> Iniciando sistema de Networking...')

        this.bootstrap()
    }

    bootstrap() {
        this.app = express()
        this.server = http.createServer(this.app)

        this.bootstrapSocket()
        this.bootstrapHttp()

        this.registerListeners()
    }

    bootstrapSocket() {
        this.sockets = socketio(this.server)
    }

    bootstrapHttp() {
        this.server.listen(3000, () => {
            console.log(`> Server listening to port 3000`)
        })

        this.app.use(express.static('public'))
    }

    registerListeners() {

        let self = this

        this.sockets.on('connection', function(socket) {
            console.log('> A user just connected to the server')

            socket.on('login', function(userAndPassword) {
                console.log(`A user tried to login`)
                self.notifyAll({type: 'loginCheck', payload: userAndPassword})
            
                socket.emit('loginResponse', {message: 'Usuário e senha inválidos...'});
            })
        })
    }

    subscribe(callback) {
        this.observers.push(callback)
    }

    notifyAll(command) {
        for (const observerFunction of this.observers) {
            observerFunction(command)
        }
    }

} export default Network