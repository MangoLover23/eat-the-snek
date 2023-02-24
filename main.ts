input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
	
})
function letComputerPlay () {
	
}
input.onButtonPressed(Button.B, function () {
	
})
let score = 0
let delay = 0
let stel_direction = 0
let dxOffset = 0
let snake = 0
let apple = 0
let maxLength = 10
basic.forever(function () {
    if (game.isGameOver()) {
    	
    }
    delay = Math.max(100, 1000 - score * 50)
    basic.pause(delay)
    if (snake[0].isTouching(apple)) {
        if (snake.length < maxLength) {
            snake.push(snake[snake.length - 1])
        }
        score += 1
    }
})
