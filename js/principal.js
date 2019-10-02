var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');

var bola = new Bola(50, '#0000ff');
inicializar("lancamentoObliquoPerdaParcial");

window.onload = init;

function init() {
    setInterval(lancamentoObliquoPerdaParcial, 1000/60); // 60 fps
};

