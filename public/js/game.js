// Iniciando o sistema de sockets
// Se conectando ao servidor...
const socket = io()




















/**
 * Camada de Network
 */

// Socket disparada sempre que nos conectamos ao servidor.
socket.on("connect", () => {
    console.log(`Acabei de me conectar com o SocketID ${socket.id}`)
})