var canvas, ctx;

function dood1Init() {
    console.log('dood1Init started');
    canvas = document.getElementById('dood1Canvas');
    ctx = canvas.getContext('2d');
    drawSquare();
}
function drawSquare() {
    ctx.fillStyle='red';
    ctx.fillRect(10,10,100,100);

}