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
//Movimento UniformeRetilíneo Uniforme (MRU)
//------------------------------
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