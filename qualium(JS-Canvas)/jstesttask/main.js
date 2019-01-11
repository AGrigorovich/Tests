let currentPos = 0;
let squareSize = 25;
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let play = '';
let squaresArray = [];
let score = document.getElementById('score').innerText;

class Square {
    constructor(color, positionX, positionY, speed) {
        this.width = squareSize;
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.speed = speed;
    }

    drawSquare() {
        ctx.fillRect(this.positionX, this.positionY, this.width, this.width);
        ctx.fillStyle = this.color;
        this.positionY = this.positionY + this.speed;
        if (this.positionY >= canvas.clientHeight) {
            this.positionY = 0;
        }
    }
}

function animate() {
    if (play) {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientWidth);
        for (let i in squaresArray) {
            squaresArray[i].drawSquare();
        }
        requestAnimationFrame(animate);
    }
    else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
}

start = () => {
    play = true;
    if (squaresArray.length === 0) {
        document.getElementById('score').innerText = 0;
        score = 0;
        let squareInPlay = Math.floor(Math.random() * (100 - 30) + 30);
        for (let i = 0; i < squareInPlay; i++) {
            let squareColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
            let squareSpeed = Math.random() * (3 - 1) + 1;
            let squareX = Math.floor(Math.random() * 620);
            squaresArray.push(new Square(squareColor, squareX, currentPos, squareSpeed));
        }
        animate();
    }
};

stop = () => {
    play = false;
    squaresArray = [];
    score = 0;
};
canvas.onclick = (event) => {
    if (play) {
        let clickMouseOnCanvasX = event.pageX - canvas.offsetLeft;
        let clickMouseOnCanvasY = event.pageY - canvas.offsetTop;
        for (i in squaresArray) {
            if ((clickMouseOnCanvasX > squaresArray[i].positionX && clickMouseOnCanvasX < squaresArray[i].positionX + squaresArray[i].width) &&
                (clickMouseOnCanvasY > squaresArray[i].positionY && clickMouseOnCanvasY < squaresArray[i].positionY + squaresArray[i].width)) {
                squaresArray.splice(i, 1);
                document.getElementById('score').innerText = ++score;
            }
        }
    }
};