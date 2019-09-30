var canvas = document.getElementById('canvas');
var contexto = canvas.getContext('2d');

var bola = new Bola(50, '#0000ff');

bola.x = 80;
bola.y = canvas.height - bola.raio;
bola.vx = 120/60;   //120 px/s
bola.vy = -500/60;
bola.ay = 3/60;   //9,8 px/s²

window.onload = init;

function quedaLivreYComPausa(){
    bola.vy += bola.ay;
    bola.y += bola.vy;

    if (bola.y <= canvas.height - bola.raio){
        bola.desenhar(contexto); // desenhe a bola    
    }else{
        bola.vy = -bola.vy*0.8;
        bola.y = canvas.height - bola.raio;
        bola.desenhar(contexto);
    }
}

function emCadaPassoX() {
    bola.x += bola.vx; 

    if (bola.x > canvas.width + bola.raio){ // se a bola vai para além da região do canvas
        bola.x = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function emCadaPassoXComPausa() {
    bola.x += bola.vx; // a velocidade horizontal aumenta a posição horizontal
    
    if (bola.x <= canvas.width - bola.raio){
        bola.desenhar(contexto); // desenhe a bola    
    }
};

function emCadaPassoY() {
    bola.y += bola.vy; 

    if (bola.y > canvas.height + bola.raio){ // se a bola vai para além da região do canvas
        bola.y = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function emCadaPassoXY() {
    bola.x += bola.vx; 
    bola.y += bola.vy;

    if (bola.y < -bola.raio){ // se a bola vai para além da região do canvas
        //bola.x = -bola.raio; // coloque-a de volta
        bola.y = canvas.height + bola.raio; // coloque-a de volta
    }
    
    if (bola.x > canvas.width + bola.raio){ // se a bola vai para além da região do canvas
        bola.x = -bola.raio; // coloque-a de volta
        //bola.y = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
};

function init() {
    setInterval(quedaLivreYComPausa, 1000/60); // 60 fps
};

