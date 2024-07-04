var canvas, ctx;

function dood1Init() {
    console.log('dood1Init started');
    canvas = document.getElementById('dood1Canvas');
    ctx = canvas.getContext('2d');
    ctx.translate(100,100);
    drawSquare(120,150,'red');
    ctx.translate(100,100);
    drawSquare(70,90,'green');
    ctx.rotate(Math.PI/3);
    ctx.translate(80,0);
    drawSquare(140,20,'blue');
}
function drawSquare(width,height,colour) {
    ctx.fillStyle=colour;
    ctx.fillRect(0,0,width,height);

}