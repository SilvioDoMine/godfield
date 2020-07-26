// Exemplo
// Meu exemplo
let loginInputs = {}
let actualPage = 'pageLogin'

function setup() {
    loginInputs.login = createInput()
    loginInputs.password = createInput('', 'password')
    loginInputs.doLogin = createButton('Login')
    loginInputs.doRegister = createButton('Register')
    createCanvas(900, 600)
}

function draw() {
    let pageToDraw = window[actualPage]

    if (pageToDraw) {
        pageToDraw()
    } else {
        console.log('Error!! Página não encontrada.')
    }
}


let loginError = ''
function pageLogin() {
    background(225)

    fill(0)
    text('Username:', 375, 285)
    loginInputs.login.position(375, 300)
    text('Password:', 375, 335)
    loginInputs.password.position(375, 350)
    loginInputs.doLogin.position(500, 385)
    loginInputs.doRegister.position(375, 385)
    fill(255, 0, 0)
    text(loginError, 345, 250)

    loginInputs.doRegister.mousePressed(function(){
        
        for (let input in loginInputs) {
            loginInputs[input].hide()
        }

        actualPage = 'pageRegister'       
    })

    loginInputs.doLogin.mousePressed(doLogin)

    //console.log('Login')
}

function pageRegister() {
    background(255, 0, 200)
    console.log('Register')
}

function pageLobby() {
    background(0)
    console.log('Lobby')
}



const socket = io()

function doLogin() {
    let login = loginInputs.login.value()
    let password = loginInputs.password.value()
    
    console.log(`Tentando logar o usuário com o login (${login}) e senha (${password}).`)

    socket.emit('login', `${login}||${password}`);
}

socket.on("connection", function(socket){
    console.log('conectado!')
})

socket.on('loginResponse', function(response){
    console.log(response)
    loginError = response.message
})