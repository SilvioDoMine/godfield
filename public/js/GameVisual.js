export default class GameVisual {

    constructor(canvas)
    {
        this.canvas = canvas

        this.init();
    }

    init()
    {
        this.canvas.style = "border: 1px solid black;"
        
        this.draw()
    }

    draw()
    {
        console.log('Framing...')
        requestAnimationFrame(this.draw())
    }
}