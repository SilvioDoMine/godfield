class Login {

    observers = []

    checkForLogin(data) {
        if (data.type != 'playerConnection')
            return false

        let socketId = data.payload.socketId;

        console.log(`> Checking if user ${socketId} is already logged in`)
        
    }

    notifyAll() {
        for (const observerFunction of this.observers) {
            observerFunction(command)
        }
    }
} export default Login