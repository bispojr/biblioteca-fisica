var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');

var bola = new Bola(50, '#0000ff');

bola.x = 80;
bola.y = 80; //canvas.height - bola.raio;
bola.vx = 120/60;   //120 px/s
bola.vy = 120/60; //-500/60;
bola.ay = 3/60;   //9,8 px/s²

window.onload = init;

function init() {
    setInterval(emCadaPassoXY, 1000/60); // 60 fps
};

