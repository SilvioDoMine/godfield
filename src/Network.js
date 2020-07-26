import socketio from 'socket.io'

class Network {    

    /**
     * Lista de Observadores da camada de Network
     * @array
     */
    observers = []

    constructor(server){
        this.server = server
        this.bootstrap()
    
        this.registerListeners()
    }

    /**
     * Bootstraps the whole application's Network
     */
    bootstrap() {
        this.sockets = socketio(this.server)
    }

    registerListeners() {
        this.sockets.on("connection", (socket) => {
            console.log(`> ${socket.id}: just connected.`)

            this.notifyAll({
                type: 'playerConnection',
                payload: {
                    socketId: socket.id
                }
            })

            socket.on("disconnect", this.handleDisconnect)
        })
    }

    /**
     * Lida com a desconecção de um jogador
     * @param {socket} socket 
     */
    handleDisconnect() {
        console.log(`> ${this.id}: just disconnected.`)
    }

    /**
     * Inscreve uma função para ser executada sempre que
     * uma ação da camada de Network acontecer.
     * 
     * @param {function} callbackFunction 
     */
    subscribe(callbackFunction)
    {
        this.observers.push(callbackFunction)
    }

    /**
     * Dispara o evento de callback para todos os escutadores.
     * 
     * @param {string} command 
     */
    notifyAll(command)
    {
        for (const observerFunctions of this.observers) {
            observerFunctions(command)
        }
    }
} export default Network