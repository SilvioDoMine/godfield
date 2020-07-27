class Login {

    static observers = []

    checkForLogin(data) {
        if (data.type != 'playerConnection')
            return false

        let socketId = data.payload.socketId;

        console.log(`> Checking if user ${socketId} is already logged in`)

        Login.notifyAll(data.payload)
        
    }

    static subscribe(callbackFunction)
    {
        Login.observers.push(callbackFunction)
    }

    static notifyAll(command) {
        for (const observerFunction of Login.observers) {
            observerFunction(command)
        }
    }
} export default Login