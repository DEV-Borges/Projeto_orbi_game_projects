function start() {

    //Ocultando o menu inicial do jogo.
	$("#inicio").hide();
	///Criando as divs referente ao jogador,inimigo1(helicoptero),inimgo2(caminhão) e o Sobrevivente e adicionando na div com ID "fundoGame".
	$("#fundoGame").append("<div id='jogador' class='anima1'></div>");
	$("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
	$("#fundoGame").append("<div id='inimigo2'></div>");
	$("#fundoGame").append("<div id='sobrevivente' class='anima3'></div>");

    //Principais variáveis do jogo
    var velocidade=5;
    var posicaoY = parseInt(Math.random() * 334);//Dando valor randomico de 0 á 334. Variavel usada dentro de moveInimigo1.
    var podeAtirar=true;
    var fimDeJogo=false;
    var TECLA = {
        W: 87,
        S: 83,
        D: 68
    }
    var jogo = {};
    jogo.pressionou = [];
    jogo.timer = setInterval(loop,40);//Fazendo com que a função loop seja rodada a cada 30 milesimos
  
    
    //Verifica se o usuário pressionou alguma tecla	
	$(document).keydown(function(e){
        jogo.pressionou[e.which] = true;
    });
     $(document).keyup(function(e){
        jogo.pressionou[e.which] = false;
    });
    //todas as funções que devem ser repetida no jogo.
    function loop() {
        moveFundo();
        moveJogador();
        moveInimigo1();
        moveInimigo2();
        moveSobrevivente();
        colisao();
    }
    //Função que movimenta o fundo do jogo.
    function moveFundo() {

        esquerda = parseInt($("#fundoGame").css("background-position"));
        $("#fundoGame").css("background-position",esquerda-1);
    }
    ////Função de move jogador.
    function moveJogador() {
	
        if (jogo.pressionou[TECLA.W]) {
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo-10);

            if (topo<=0) {
		
                $("#jogador").css("top",topo+3);
            }
        
        }
        if (jogo.pressionou[TECLA.S]) {
            
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top",topo+10);
            
            if (topo>=434) {	
                $("#jogador").css("top",topo-1);
                    
            }
        }
        
        if (jogo.pressionou[TECLA.D]) {
            
            disparo();
        }
    
    }
    ////Função de move inimigo(helicoptero)
    function moveInimigo1() {
        //Fazendo com que o inimigo ande em direção a esquerda. 
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left",posicaoX-velocidade);
        $("#inimigo1").css("top",posicaoY);
        //Verificando se a posição do inimigo é igual a 0, caso seja 0 estamos fazendo que ele receba uma nova posição aleatoria. 
        if (posicaoX<=0) {
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
                
        }
    }
    ////Função de move inimigo(caminhão).
    function moveInimigo2() {
        //Fazendo com que o inimigo ande em direção a esquerda dando como valor do left - 3
        posicaoX = parseInt($("#inimigo2").css("left"));
	    $("#inimigo2").css("left",posicaoX-3);
		//Verificando se a posição do inimigo é igual a 0, caso seja 0 estamos fazendo com que ele receba a posição inicial dele em left. 
		if (posicaoX<=0) {
		    $("#inimigo2").css("left",775);					
	    }
    }
    ////Função de move Sobrevivente.
    function moveSobrevivente() {
        //fazendo sobrevivente andar para direita.
        posicaoX = parseInt($("#sobrevivente").css("left"));
        $("#sobrevivente").css("left",posicaoX+1);
        //verificando se a posição x do sobrevivente é maior que 906 para poder voltar a posição 0            
        if (posicaoX>906) {   
            $("#sobrevivente").css("left",0);                       
        }
    
    }
    ////Função de desparo.
    function disparo() {
	
        if (podeAtirar==true) {
            
        podeAtirar=false;
        
        topo = parseInt($("#jogador").css("top"))
        posicaoX= parseInt($("#jogador").css("left"))
        tiroX = posicaoX + 120;
        topoTiro=topo+45;
        $("#fundoGame").append("<div id='disparo'></div");
        $("#disparo").css("top",topoTiro);
        $("#disparo").css("left",tiroX);
        
        var tempoDisparo=window.setInterval(executaDisparo, 30); 

        }
     
        function executaDisparo() {
        posicaoX = parseInt($("#disparo").css("left"));

        $("#disparo").css("left",posicaoX+15); 
    
            if (posicaoX>900) {
                            
                window.clearInterval(tempoDisparo);
                tempoDisparo=null;
                $("#disparo").remove();
                podeAtirar=true;
                        
            }
        }
    }
    ////Função de colisão.
    function colisao() {
        //identificando a colisão entre o jogador .
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        var colisao2 = ($("#jogador").collision($("#inimigo2")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));
        var colisao4 = ($("#disparo").collision($("#inimigo2")));
        var colisao5 = ($("#jogador").collision($("#amigo")));
        var colisao6 = ($("#inimigo2").collision($("#amigo")));
        
        //Verificando se a variavel colisao1 esta preenchida e se o length dela é maior que 0.
        if (colisao1.length>0) {
            
            //passando como parametro a posição do inimigo1(helicoptero)
            inimigo1X = parseInt($("#inimigo1").css("left"));
            inimigo1Y = parseInt($("#inimigo1").css("top"));
            explosao1(inimigo1X,inimigo1Y);
            

            //reposicinando o inimigo1(helicoptero)
            posicaoY = parseInt(Math.random() * 334);
            $("#inimigo1").css("left",694);
            $("#inimigo1").css("top",posicaoY);
        }

        //colisãoe entre Jogador com o inimigo2 
        if (colisao2.length>0){
        
            inimigo2X = parseInt($("#inimigo2").css("left"));
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            explosao2(inimigo2X,inimigo2Y);
                    
            $("#inimigo2").remove();

            reposicionaInimigo2();
                
        }
    }
    ////Função de efeito de explosão.
    function explosao1(inimigo1X,inimigo1Y) {
        var div=$("#explosao1");
        ///inserido uma div para exibir a animação de explosão e removendo.
        $("#fundoGame").append("<div id='explosao1'></div");
        div.css("background-image", "url(imgs/explosao.png)");
        div.css("top", inimigo1Y);
        div.css("left", inimigo1X);
        div.animate({width:200, opacity:0}, "slow");

        var tempoExplosao=window.setInterval(removeExplosao, 1000);
       
        function removeExplosao() {
                
            div.remove();
            window.clearInterval(tempoExplosao);
            tempoExplosao=null;
                
        }
            
    }
    //Reposiciona Inimigo2	
	function reposicionaInimigo2() {
	
        var tempoColisao4=window.setInterval(reposiciona4, 5000);
            
        function reposiciona4() {
            
            window.clearInterval(tempoColisao4);
            tempoColisao4=null;
                
            if (fimDeJogo==false) {
                
                $("#fundoGame").append("<div id=inimigo2></div");
                
            }
                
        }	
    }
    //Explosão2	
	function explosao2(inimigo2X,inimigo2Y) {
	
        $("#fundoGame").append("<div id='explosao2'></div");
        $("#explosao2").css("background-image", "url(imgs/explosao.png)");
        var div2=$("#explosao2");
        div2.css("top", inimigo2Y);
        div2.css("left", inimigo2X);
        div2.animate({width:200, opacity:0}, "slow");
        
        var tempoExplosao2=window.setInterval(removeExplosao2, 1000);
        
            function removeExplosao2() {
                
                div2.remove();
                window.clearInterval(tempoExplosao2);
                tempoExplosao2=null;
                
            }
            
            
        }

}



	



