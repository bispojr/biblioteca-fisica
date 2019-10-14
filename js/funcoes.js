//------------------------------
//Movimento Retilíneo Uniforme (MRU)
//------------------------------

//MRU horizontal com pausa
function emCadaPassoXComPausa() {
    bola.x += bola.vx; // a velocidade horizontal aumenta a posição horizontal
    
    if (bola.x <= canvas.width - bola.raio){
        bola.desenhar(contexto); // desenhe a bola    
    }
}

//MRU horizontal sem pausa (cíclico)
function emCadaPasso() {
    bola.y += bola.vy; 

    if (bola.y > canvas.height - bola.raio){ // se a bola vai para além da região do canvas
        bola.y = canvas.height - bola.raio; 
        bola.vy = -bola.vy;
    }
    if (bola.y < bola.raio){ // se a bola vai para além da região do canvas
        bola.y = bola.raio; 
        bola.vy = -bola.vy;
    }

    bola.desenhar(contexto); // desenhe a bola    
}

//MRU horizontal sem pausa (cíclico)
function emCadaPassoX() {
    bola.x += bola.vx; 

    if (bola.x > canvas.width + bola.raio){ // se a bola vai para além da região do canvas
        bola.x = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
}
//MRU vertical com pausa
function emCadaPassoYComPausa() {
    bola.y += bola.vy; // a velocidade horizontal aumenta a posição horizontal
    
    if (bola.y <= canvas.height - bola.raio){
        bola.desenhar(contexto); // desenhe a bola    
    }
}
//MRU vertical sem pausa (cíclico)
function emCadaPassoY() {
    bola.y += bola.vy; 

    if (bola.y > canvas.height + bola.raio){ // se a bola vai para além da região do canvas
        bola.y = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
}
//MRU inclinado sem pausa (cíclico)
function emCadaPassoXY() {
    bola.x += bola.vx; 
    bola.y += bola.vy;

    if (bola.y < -bola.raio){ // se a bola vai para além da região do canvas
        //bola.x = -bola.raio; // coloque-a de volta
        bola.y = canvas.height + bola.raio; // coloque-a de volta
    }
    if (bola.y > canvas.height + bola.raio){ // se a bola vai para além da região do canvas
        bola.y = -bola.raio; // coloque-a de volta
    }
    
    if (bola.x > canvas.width + bola.raio){ // se a bola vai para além da região do canvas
        bola.x = -bola.raio; // coloque-a de volta
        //bola.y = -bola.raio; // coloque-a de volta
    }

    bola.desenhar(contexto); // desenhe a bola    
}

//------------------------------
//Movimento Uniformemente Variado (MUV)
//------------------------------

//Queda livre com transferência completa de energia
function quedaLivreComPausa(){
    bola.vy += bola.ay;
    bola.y += bola.vy;

    if (bola.y > canvas.height - bola.raio)
        bola.y = canvas.height - bola.raio;

    bola.desenhar(contexto);
}
//Queda Livre com transferência parcial de energia
function quedaLivreQuicando(){
    bola.vy += bola.ay;
    bola.y += bola.vy;

    if (bola.y <= canvas.height - bola.raio){
        bola.desenhar(contexto); // desenhe a bola    
    }else{
        bola.vy = -bola.vy*0.8; //Coeficiente de restituição = 80%
        bola.y = canvas.height - bola.raio;
        bola.desenhar(contexto);
    }
}
//Lançamento oblíquo com transferência completa de energia
function lancamentoObliquoComPausa(){
    bola.vy += bola.ay;
    bola.y += bola.vy;

    bola.x += bola.vx;

    if(bola.x > canvas.width - bola.raio){
        bola.x = canvas.width - bola.raio;
        
        bola.ay = 0;
        bola.vy = 0;
    }

    if (bola.y > canvas.height - bola.raio){
        bola.y = canvas.height - bola.raio;

        bola.vx = 0;
    }

    bola.desenhar(contexto);
}
//Lançamento oblíquo sem transferência de energia
function lancamentoObliquo(){
    bola.vy += bola.ay;
    bola.y += bola.vy;

    bola.x += bola.vx;

    if(bola.x > canvas.width - bola.raio){
        bola.x = canvas.width - bola.raio;
        
        bola.vx = -bola.vx;
    }

    if(bola.x < bola.raio){
        bola.x = bola.raio;
        
        bola.vx = -bola.vx;
    }

    if (bola.y > canvas.height - bola.raio){
        bola.y = canvas.height - bola.raio;

        bola.vy = -bola.vy;
    }

    bola.desenhar(contexto);
}
//Lançamento oblíquo sem transferência de energia
function lancamentoObliquoPerdaParcial(){
    bola.vy += bola.ay;
    bola.y += bola.vy;

    bola.x += bola.vx;

    if(bola.x > canvas.width - bola.raio){
        bola.x = canvas.width - bola.raio;
        
        bola.vx = -bola.vx*0.9; //Coeficiente de restituição
    }

    if(bola.x < bola.raio){
        bola.x = bola.raio;
        
        bola.vx = -bola.vx*0.9; //Coeficiente de restituição
    }

    if (bola.y > canvas.height - bola.raio){
        bola.y = canvas.height - bola.raio;

        bola.vy = -bola.vy*0.9; //Coeficiente de restituição
    }

    var a = Math.abs(boneco.corpo.y - bola.y);
    var b = Math.abs(boneco.corpo.x - bola.x);
    var c = boneco.corpo.raio + bola.raio;


    if(c <= Math.sqrt(a*a + b*b)){
        bola.vx = -bola.vx*0.9;
    }

    contexto.clearRect(0, 0, canvas.width, canvas.height);
    boneco.desenhar(contexto);
    bola.desenhar(contexto);
}