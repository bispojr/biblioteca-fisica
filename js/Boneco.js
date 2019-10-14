function Boneco(){
    this.cabeca = new Bola(25,'#943b5e');
    this.corpo = new Bola(50,'#943b5e');

    this.corpo.y = canvas.height - 50;
    this.corpo.x = canvas.width - 80;
    this.cabeca.y = canvas.height - 125;
    this.cabeca.x = canvas.width - 80;

    this.desenhar = function(){
    	this.cabeca.desenhar(contexto);
    	this.corpo.desenhar(contexto);
    };
}