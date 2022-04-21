var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");//pegando a tag label com o ID="jogador-selecionado".
var vecendorSelecionado = document.getElementById("vencedor");//pegando a tag label com o ID="vencedor".
var quad = document.getElementsByClassName('quadrado');//pegando todas as divs com a class="quadrado".

mudarJogador('X');//Dando valor inicial "X" para variavel jogador.

///////Preenche a div com "X" ou "O".
function selecionarQuad(id){

	if (vencedor !== null){
		return
	}	
    var quad = document.getElementById(id);//pegando a div do html para fazer a comparação
    //Verificando se a div esta com o text "-" para da continuidade á função "selecionarQuad()".
    if (quad.innerHTML !== '-') {
        return;
    }
    quad.innerHTML = jogador;
    quad.style.color = "#000";
    //Comparando o valor que esta em jogador para informa de quem é a vez.
    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }
    mudarJogador(jogador);
	checkVencedor();
}

//Função para indicar de quem é a vez, para preencher a div com o parametro "valor".
function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checkVencedor(){
	
	for (let x in quad){		
    if (checksequencia(quad[0],quad[1],quad[2])){
        mudarCor(quad[0],quad[1],quad[2]);
        mudarVencedor(quad[0]);
		return
    }
	if (checksequencia(quad[3],quad[4],quad[5])){
        mudarCor(quad[3],quad[4],quad[5]);
        mudarVencedor(quad[3]);
		return
    }
	if (checksequencia(quad[6],quad[7],quad[8])){
        mudarCor(quad[6],quad[7],quad[8]);
        mudarVencedor(quad[6]);
		return
    }
	if (checksequencia(quad[0],quad[3],quad[6])){
        mudarCor(quad[0],quad[3],quad[6]);
        mudarVencedor(quad[0]);
		return
    }
	if (checksequencia(quad[1],quad[4],quad[7])){
        mudarCor(quad[1],quad[4],quad[7]);
        mudarVencedor(quad[1]);
		return
    }	
	if (checksequencia(quad[2],quad[5],quad[8])){
        mudarCor(quad[2],quad[5],quad[8]);
        mudarVencedor(quad[2]);
		return
    }
	if (checksequencia(quad[0],quad[4],quad[8])){
        mudarCor(quad[0],quad[4],quad[8]);
        mudarVencedor(quad[0]);
		return
    }
	if (checksequencia(quad[2],quad[4],quad[6])){
        mudarCor(quad[2],quad[4],quad[6]);
        mudarVencedor(quad[2]);
    }
}
}

function  mudarVencedor(quadrado){
    
    vencedor = quadrado.innerHTML;
    vecendorSelecionado.innerHTML = vencedor;
}

function mudarCor(quad1, quad2 ,quad3){
    quad1.style.background = "#0f0";
    quad2.style.background = "#0f0";
    quad3.style.background = "#0f0";
}

function checksequencia(quad1, quad2 ,quad3){
    var eIgual = false;
    
    if(quad1.innerHTML !== '-' && quad1.innerHTML === quad2.innerHTML && quad2.innerHTML === quad3.innerHTML){
        
        eIgual = true;
    }
    
    return eIgual;
}

function reniciar(){
	
	vencedor = null;
	vecendorSelecionado.innerHTML = ' ';
	
	for(var i = 1; i<=9; i++){
		var quad = document.getElementById(i);
		quad.style.background = '#eee';
		quad.style.color = '#eee';
		quad.innerHTML = '-';
	}
	
	mudarJogador('X');

}

