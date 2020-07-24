import GameVisual from './GameVisual.js'

const canvas = document.getElementById('gameCanvas')
const context = canvas.getContext('2d')

canvas.style = "border: 1px solid black;"


class Game {

    gamePage = 'lobbyPage';

    constructor(canvas, context) {
        this.canvas = canvas
        this.context = context

        this.draw()
    }

    draw() {
        // Executa a função que tem o nome da variável PAGE.
        this[this.gamePage]();

        requestAnimationFrame(this.draw())
    }

    lobbyPage() {
        this.context.fillStyle = "#8dd6df";
        this.context.fillRect(0, 0, this.canvas.height, this.canvas.width)

        this.context.fillStyle = "#238938"
        this.context.fillRect(50, 50, (this.canvas.height * 0.3), (this.canvas.width * 0.1))
        this.context.fillRect(510, 50, (this.canvas.height * 0.3), (this.canvas.width * 0.1))

        this.context.fillStyle = "#FFFFFF"
        this.context.font = "60px Arial"
        this.context.fillText("SOLO", 90, 110)
    }
}

const game = new Game(canvas, context)