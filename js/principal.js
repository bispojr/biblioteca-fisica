var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');

var boneco = new Boneco();

window.addEventListener('keydown',check,false);

function check(e) {
    var code = e.keyCode;
    if(code == 38){
        boneco.corpo.cor='pink';
        boneco.corpo.desenhar(contexto);
    }
    if(code == 40){
        boneco.cabeca.cor = 'green';
        boneco.cabeca.desenhar(contexto);
    }

    //alert(e.keyCode);
}

var bola = new Bola(50, '#0000ff');
inicializar("lancamentoObliquoPerdaParcial");

window.onload = init;

function init() {
    setInterval(lancamentoObliquoPerdaParcial, 1000/60); // 60 fps
}

