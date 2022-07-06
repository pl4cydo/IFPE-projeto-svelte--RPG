<script type="text/javascript">
	import { Estudante } from "./Vida2.js"
	import { Caminhoneiro } from "./Vida2.js"
	import { estadoTurno } from "./Vida2.js"
	import { trocarEstadoDoJogo } from './Estado.js'


	// MENU BATALHA
	function trocarTurno() {
		if ($estadoTurno == true) {
			$estadoTurno = false;
			console.log($estadoTurno)
		} else if ($estadoTurno == false){
			setTimeout(function(){
				$estadoTurno = true;
				console.log($estadoTurno)
			},6000);
		}
	}


	let menuEixoY = 399;
	document.onkeydown = function(event) {
    		switch (event.keyCode) {
	       case 38:
	            // alert('Up key pressed');
	            	// paraCima()
	            menuParaCima()
	          break;
	       case 40:
	            // alert('Down key pressed');
	            	// paraBaixo()	
	            menuParaBaixo()
	          break;
	       case 32:
       		if ($estadoTurno != false) {
	       		if (menuEixoY == 399) {
	       			murro()
	       		} else if (menuEixoY == 454) {
	       			curaEstudante()
	       		} else if (menuEixoY == 509) {
	       			carregarPower()
	       			// power()
	       		} 
	       	}
       		// alert("SPACE")
       		// entrarAtaque()
       	  break;
    		}
	};

	function menuParaBaixo() {
		if (menuEixoY != 509) {
			menuAtaques.style.top = (menuEixoY += 55) + "px"
			console.log(menuEixoY)
		}
	}
	function menuParaCima() {
		if (menuEixoY != 399) {
			menuAtaques.style.top = (menuEixoY -= 55) + "px"
			console.log(menuEixoY)
		}
	}

	



	// ************************ Caminhoneiro ************************

	function ataqueAleatorio() {
		let aleatorio = Math.round(Math.random()*10)
		if ($Caminhoneiro.vidaCarlos > 0) {
			if (aleatorio < 7) {
				inf2.innerHTML = $Caminhoneiro.nome + " Tentou atacar com Tapa "
				setTimeout(function(){
					tapa()
				},2000);
			} else {
				inf2.innerHTML = $Caminhoneiro.nome + " Tentou Jogar a Garrafa "
				setTimeout(function(){
					jogarGarrafa()	
				},2000); 
			}
		}
	}

	function tapa() {
		let acerto = Math.round(Math.random()*20) + $Caminhoneiro.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*20) + $Caminhoneiro.ataque + 5; //15
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf2.innerHTML = $Caminhoneiro.nome + " Acertou um Tapa com " + dano + " de dano"
			},2000);
			movimentotapa()
			setTimeout(function() {
				if ($Estudante.vida < 0) {
				vidaEstudante.style.width = "0px"
				} else {
					vidaEstudante.style.width = $Estudante.vida + "px"
				}	
			}, 3000)
		} else {
			setTimeout(function(){
    			inf2.innerHTML = $Caminhoneiro.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			bottonIformacao22.style.visibility = "hidden"

			setTimeout(function(){
				personagem.style.transform = "rotate(90deg)"
				fimBus()
			},5000);
		}
		setTimeout(function(){
    		inf2.innerHTML = "Fim do turno"
		},5000);
		
		setTimeout(function(){
			if ($Estudante.vida > 0) {
    			bottonIformacao.style.visibility = "visible"
    		}
		},6000);
		trocarTurno()
		
	}
	function movimentotapa() {
		setTimeout(function(){
			personagemBus2.style.left = "400px"
		},400);
		setTimeout(function(){
			personagemBus2.style.transform = "rotateY(45deg)"
		},500);
		setTimeout(function(){
			personagemBus2.style.transform = "rotateY(-45deg)"
			// personagem.style.transform = "rotateY(deg)"
			
		},1000);
		setTimeout(function(){
			personagem.style.top = "270px"
		},1400)
		setTimeout(function(){
			personagemBus2.style.transform = "rotateY(0deg)"
			personagemBus2.style.left = "200px"
			personagem.style.transform = "rotate(0deg)"
			personagem.style.top = "230px"
		},1500);
	}

	function jogarGarrafa() {
		let acerto = Math.round(Math.random()*20) + $Caminhoneiro.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*20) + $Caminhoneiro.ataque + 20;
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf2.innerHTML = $Caminhoneiro.nome + " deu-lhe uma garrafada e causou " + dano + " de dano"
    			if ($Estudante.vida < 0) {
					vidaEstudante.style.width = "0px"
				} else {
					vidaEstudante.style.width = $Estudante.vida + "px"
				}
			},2000);
			movimentojogarGarrafa()
		} else {
			setTimeout(function(){
    			inf2.innerHTML = $Caminhoneiro.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			bottonIformacao22.style.visibility = "hidden"

			setTimeout(function(){
				personagem.style.transform = "rotate(90deg)"
				fimBus()
			},3000);
		}
		setTimeout(function(){
    		inf2.innerHTML = "Fim do turno"
		},5000);
		setTimeout(function(){
			if ($Estudante.vida > 0) {
    				bottonIformacao.style.visibility = "visible"
    			}
		},6000);
		trocarTurno()
	}
	function movimentojogarGarrafa() {
		personagemBus2.style.transform = "rotate(-25deg)"
		garrafa.style.visibility = "visible"
		setTimeout(function(){
			personagemBus2.style.transform = "rotate(25deg)"
			garrafa.style.left = "520px"
			garrafa.style.top = "320px"
			garrafa.style.transform = "rotate(90deg)"
			garrafa.style.transform = "rotate(180deg)"
			garrafa.style.transform = "rotate(270deg)"

		},500);
		setTimeout(function(){
			personagem.style.transform = "rotate(45deg)"
		},900)
		setTimeout(function(){
			personagemBus2.style.transform = "rotate(0deg)"
		},1000);
		setTimeout(function(){
			garrafa.style.visibility = "hidden"
			garrafa.style.left = "270px"
			garrafa.style.top = "160px"
			garrafa.style.transform = "rotate(0deg)"
			personagem.style.transform = "rotate(0deg)"
			personagem.style.top = "230px"
		},1500);
	} 

	function fimBus() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus2.style.visibility = "hidden"
		fimBatalha.innerHTML = "<h1>YOU LOSE! :)</h1><br><p> Levou 5 faltas, tente a sorte amanhã.</p>"
		setTimeout(function(){
    			fimBatalha.style.visibility = "visible"
		},4000);
		$estadoTurno = false;
		setTimeout(function(){
    			 location.reload();
		},10000);
	}



// ************************ ESTUDANTE IFPE ************************
	
	
	function murro() {
		inf2.innerHTML = $Estudante.nome + " atacou com Murro"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto;
		if (acerto >= $Caminhoneiro.def){
			let dano = Math.round(Math.random()*10) + $Estudante.ataque + 20; //20
			setTimeout(function(){
    			inf2.innerHTML = $Estudante.nome + " Acertou um Murro com " + dano + " de dano"
				$Caminhoneiro.vidaCarlos -= dano;
				if ($Caminhoneiro.vidaCarlos < 0) {
					barraVidaBus2.style.width = "0px"
				} else {
					barraVidaBus2.style.width = $Caminhoneiro.vidaCarlos + "px"
				}
    			movimentoMurro()
			},2000);
			contadorPower++
			setTimeout(function(){
    				manaCor()
			},2500);
		} else {
			setTimeout(function(){
    				inf2.innerHTML = $Estudante.nome + " errou o ataque!"
			},2000);
		}
		setTimeout(function(){
			if ($Caminhoneiro.vidaCarlos <= 0) {
				console.log("opa")
				personagemBus2.style.transform = "rotate(-90deg)"
				personagemBus2.style.top = "150px"
				bottonIformacao22.style.visibility = "hidden"
				setTimeout(function(){
    					fim()
    				},6000);
			}
		},5000);
		setTimeout(function(){
    			ataqueAleatorio()
		},5000);
		trocarTurno()
		bottonIformacao.style.visibility = "hidden"
	}
	function movimentoMurro() {
		personagem.style.left = "-100px"
		setTimeout(function(){
    			personagemBus2.style.top = "190px"
		},500);
		setTimeout(function(){
			personagemBus2.style.top = "115px"
		},600);
		setTimeout(function(){
			personagem.style.left = "100px"
		},300);	
	} 

	let contadorCura = 0;
	let vidaAtual = $Estudante.vida;
	function curaEstudante() {
		if (contadorCura == 0) {
			inf2.innerHTML = $Estudante.nome + "comeu um lanche e recuperou vida"
			let cura = Math.round(0.3 * vidaAtual)
			if ((cura + $Estudante.vida) > 194) {
				$Estudante.vida = 194
				
			} else {
				$Estudante.vida += cura
			}
			movimentoCura()
			setTimeout(function(){
				inf2.innerHTML = $Estudante.nome + " curou 30% do HP atual"
				vidaEstudante.style.width = $Estudante.vida + "px"
			},2000);
			contadorPower++
			manaCor()
		} else {
			inf2.innerHTML = "Opa! a bolsa permanência é para a passagem. Um lanche por dia!"
		}
		setTimeout(function(){
    		inf2.innerHTML = "Fim do turno"
		},8000);	
		setTimeout(function(){
    		ataqueAleatorio()
		},10000);
		bottonIformacao.style.visibility = "hidden"
		contadorCura++
		trocarTurno()
	}
	function movimentoCura() {
		personagem.style.top = "200px"
		setTimeout(function(){
    		personagem.style.top = "230px"
		},2000);
	}


	let contadorPower = 0;
	function manaCor() {
		if (contadorPower == 0) {
			mana.style.width = "0%"
		} else if (contadorPower == 1) {
			mana.style.width = "25%"
		} else if (contadorPower == 2) {
			mana.style.width = "50%"
		} else if (contadorPower == 3) {
			mana.style.width = "75%"
		} else if (contadorPower == 4) {
			mana.style.width = "100%"
		}
	}
	function carregarPower() {
		if (contadorPower < 4) {
			inf2.innerHTML = "Falta energia, use outro movimento nesse turno."
		} else {
			power()
		}
	}

	function power() {
		inf2.innerHTML = $Estudante.nome + " tomou distância"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto + 3;
		if (acerto >= $Caminhoneiro.def){
			let dano = Math.round(Math.random()*20) + $Estudante.ataque + 50;
			setTimeout(function(){
				$Caminhoneiro.vidaCarlos -= dano;
    			inf2.innerHTML = $Estudante.nome + " acertou uma 'Vuadora' com " + dano + " de dano"
    			if ($Caminhoneiro.vidaCarlos < 0) {
					barraVidaBus2.style.width = "0px"
				} else {
					barraVidaBus2.style.width = $Caminhoneiro.vidaCarlos + "px"
				}
    			movimentoPower() 
			},4000);
		} else {
			setTimeout(function(){
    			inf2.innerHTML = $Estudante.nome + " caiu no meio-fio e passou longe."
			},4000);
		}
		// setTimeout(function(){
  //   		inf2.innerHTML = "Fim do turno"
		// },7000);
		setTimeout(function(){
			if ($Caminhoneiro.vidaCarlos <= 0) {
				console.log("opa")
				personagemBus2.style.transform = "rotate(-90deg)"
				personagemBus2.style.top = "150px"
				bottonIformacao22.style.visibility = "hidden"
				setTimeout(function(){
    					fim()
    				},6000);
			}
		},5000);
		setTimeout(function(){
    			ataqueAleatorio()
		},7000);
		bottonIformacao.style.visibility = "hidden"
		contadorPower = 0;
		manaCor()
		trocarTurno()
	} 
	function movimentoPower() {
		personagem.style.left = "-100px"
		personagem.style.transform = "rotate(55deg)"
		personagem.style.top = "130px"

		setTimeout(function(){
    		personagemBus2.style.top = "190px"
    		personagemBus2.style.transform = "rotate(5deg)"
		},500);
		setTimeout(function(){
			personagemBus2.style.top = "115px"
			personagemBus2.style.transform = "rotate(0deg)"
		},700);
		setTimeout(function(){
			personagem.style.left = "100px"
			personagem.style.top = "230px"
			personagem.style.transform = "rotate(0deg)"
		},250);	
	} 
	

	function fim() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus2.style.visibility = "hidden"
		fimBatalha.style.visibility = "visible"
		// $estadoTurno = false;
		setTimeout(function(){
    		trocarEstadoDoJogo('mapa3')
		},5000);
	}


</script>
<link rel="stylesheet" type="text/css" href="./styles/personagem2.css">

<!-- ************************ Caminhoneiro ************************ -->
<div class="bloco2">
	<div id="barraInformacoesBus2">
		<p class="nomeBus2">{$Caminhoneiro.nome}</p>
		<p class="nomeBus2">HP:{$Caminhoneiro.vidaCarlos}</p>
		<div class="contornoBus2">
			<div  id="barraVidaBus2"></div>
		</div>	
	</div>
	<div id="personagemBus2">
		<img id="imagemCaminhoneiro" src="./images/truckdriver.png" alt="Caminhoneiro">
	</div>
	<div id="garrafa">
		<img id="garrafaImg" src="./images/garrafa.png" alt="garrafa">
	</div>
	<div id="bottonIformacao22">
		<p id="inf2">Caminhoneiros estão causando engarrafamento na BR, lute para conseguir chegar ao IF.</p>
	</div>
</div>



<!-- ************************ ESTUDANTE IFPE ************************ -->
<div class="bloco2">
	<div id="personagem">
		<img src="./images/player.png" alt="personagem">
	</div>
	<div id="barraInformacoes">
		<p class="nome">EstudanteIFPE</p>
		<p class="nome">HP:{$Estudante.vida}</p>
		<div class="contorno">
			<div id="vidaEstudante"></div>
		</div>
		<div class="barraMana">
			<div id="mana"></div>
		</div>
	</div>
	<div id="bottonIformacao">
		<!-- <p id="inf2">nn</p> -->
		<ul id="listaStatus">
			<li>Nome: {$Estudante.nome}</li>
			<li>Proeficiência: D20 + {$Estudante.baseAcerto}</li>
			<li>Ataque: D10 + {$Estudante.ataque}</li>
			<li>Defesa: {$Estudante.def}</li>
		</ul>
		<div class="divAtaques">Murro</div>
		<div class="divAtaques">Lanche da Tia</div>
		<div class="divAtaques">'Vuadora'</div>
		<div id="menuAtaques">
			<img id="mao" src="./images/hand.gif" alt="mãozinha">
		</div>
		<div id="fimBatalha">
			<h1>YOU WIN!</h1>
			<p> Os caminhoneiros seguiram viagem</p>
		</div>
	</div>
</div>