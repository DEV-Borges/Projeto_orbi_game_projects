var jogador = null;
var jogadorSelecionado = document.getElementById("jogador-selecionado")//pegando a tag label com o ID="jogador-selecionado"
var quad = document.getElementsByClassName('quadrado');//pegando todas as divs com a class="quadrado"

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
    
}


