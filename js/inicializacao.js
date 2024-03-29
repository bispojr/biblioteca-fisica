//------------------------------
//Inicializacao
//------------------------------

//Bola no topo esquerdo com margem
function bolaTopoEsquerdo(margem) {
    bola.x = bola.raio + margem;
    bola.y = bola.raio + margem;
}
//Bola na base esquerda com margem
function bolaBaseEsquerda(margem) {
    bola.x = bola.raio + margem;
    bola.y = canvas.height - bola.raio - margem;
}
//emCadaPassoXComPausa
function inicializar(valor){
    
    switch(valor){
        case "emCadaPasso":
            bolaTopoEsquerdo(30);
            bola.vy = 120/60;   
            break;
        case "emCadaPassoXComPausa":
            bolaTopoEsquerdo(30);
            bola.vx = 120/60;   //120 px/s
            break;
        case "emCadaPassoXY":
            bolaTopoEsquerdo(30);
            bola.vx = 30/60;   //120 px/s
            bola.vy = 40/60;   //120 px/s
            break;
        case "quedaLivreComPausa":
            bolaTopoEsquerdo(30);
            bola.vy = 0/60;  // 0 px/s
            bola.ay = 3/60;   //3 px/s²*
            break;

        case "quedaLivreQuicando":
            bolaBaseEsquerda(30);
            bola.vy = -500/60;  // -500 px/s
            bola.ay = 3/60;   //3 px/s²*
            break;
        case "lancamentoObliquoComPausa":
            bolaBaseEsquerda(30);
            bola.vx = 250/60;  // 30 px/s
            bola.vy = -300/60;  // 30 px/s
            bola.ay = 3/60;   //3 px/s²*
            break;
        case "lancamentoObliquo":
            bolaBaseEsquerda(30);
            bola.vx = 250/60;  // 30 px/s
            bola.vy = -300/60;  // 30 px/s
            bola.ay = 3/60;   //3 px/s²*
            break;
        case "lancamentoObliquoPerdaParcial":
            bolaBaseEsquerda(30);
            bola.vx = 250/60;  // 30 px/s
            bola.vy = -300/60;  // 30 px/s
            bola.ay = 3/60;   //3 px/s²*
            break;
    }
}

