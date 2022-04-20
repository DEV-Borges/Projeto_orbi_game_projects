var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");//pegando a tag label com o ID="jogador-selecionado".
var vecendorSelecionado = document.getElementById("vencedor");//pegando a tag label com o ID="vencedor".
//var quad = document.getElementsByClassName('quadrado');//pegando todas as divs com a class="quadrado".

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
	checkVencedor()

}

///Função para indicar de quem é a vez, para preencher a div com o parametro "valor".
function mudarJogador(valor) {
    jogador = valor
    jogadorSelecionado.innerHTML = jogador
}

function checkVencedor() {
    
    var quad1 = document.getElementById("1");
    var quad2 = document.getElementById("2");
    var quad3 = document.getElementById("3");
    var quad4 = document.getElementById("4");
    var quad5 = document.getElementById("5");
    var quad6 = document.getElementById("6");
    var quad7 = document.getElementById("7");
    var quad8 = document.getElementById("8");
    var quad9 = document.getElementById("9");
    
    if (checksequencia(quad1,quad2,quad3)){
        mudarCor(quad1,quad2,quad3);
        mudarVencedor(quad1);
		return
    }
	if (checksequencia(quad4,quad5,quad6)){
        mudarCor(quad4,quad5,quad6);
        mudarVencedor(quad4);
		return
    }
	if (checksequencia(quad7,quad8,quad9)){
        mudarCor(quad7,quad8,quad9);
        mudarVencedor(quad7);
		return
    }
	if (checksequencia(quad1,quad4,quad7)){
        mudarCor(quad1,quad4,quad7);
        mudarVencedor(quad1);
		return
    }
	if (checksequencia(quad2,quad5,quad8)){
        mudarCor(quad2,quad5,quad8);
        mudarVencedor(quad2);
		return
    }	
	if (checksequencia(quad3,quad6,quad9)){
        mudarCor(quad3,quad6,quad9);
        mudarVencedor(quad3);
		return
    }
	if (checksequencia(quad1,quad5,quad9)){
        mudarCor(quad1,quad5,quad9);
        mudarVencedor(quad1);
		return
    }
	if (checksequencia(quad3,quad5,quad7)){
        mudarCor(quad3,quad5,quad7);
        mudarVencedor(quad3);
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




