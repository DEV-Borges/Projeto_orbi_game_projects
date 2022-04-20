var jogador, vencedor = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado");//pegando a tag label com o ID="jogador-selecionado".
var vecendorSelecionado = document.getElementById("vencedor");//pegando a tag label com o ID="vencedor".
var quad = document.getElementsByClassName('quadrado');//pegando todas as divs com a class="quadrado".

mudarJogador('X');//Dando valor inicial "X" para variavel jogador.

///////Preenche a div com "X" ou "O".
function selecionarQuad(id){

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
    
    if (checksequencia(quad1,quad2,quad2)){
        mudarCor(quad1,quad2,quad2);
        mudarVencedor(quad1); 
    }
   
}


function  mudarVencedor(quadrado){
    
    vencedor = quadrado.innerHTML;
    vecendorSelecionado.innerHTML = "vencedor";
}

function mudarCor(x, y ,z){
    x.style.background = "#0f0";
    y.style.background = "#0f0";
    z.style.background = "#0f0";
}

function checksequencia(x,y,z){
    var eIgual = false;
    
    if(x.inner.HTML !== '-' && x.innerHTML === y.innerHTML && y.innerHTML === z.innerHTML){
        
        eIgual = true;
    }
    
    return eIgual;
}





