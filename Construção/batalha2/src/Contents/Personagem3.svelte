<script type="text/javascript">
	import { Estudante } from "./Vida3.js"
	import { Messiah } from "./Vida3.js"
	import { estadoTurno } from "./Vida3.js"
	// import { trocarEstadoDoJogo } from './Estado.js'


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

	



	// ************************ Messiah ************************

	function ataqueAleatorio() {
		let aleatorio = Math.round(Math.random()*10)
		if ($Messiah.vidaCarlos > 0) {
			if (aleatorio < 6) {
				inf3.innerHTML = $Messiah.nome + " Tentou Cortar a Verba"
				setTimeout(function(){
					corteVerba()
				},2000);
			} else {
				inf3.innerHTML = $Messiah.nome + " Tentou tocar o berrante "
				setTimeout(function(){
					motociata()	
				},2000); 
			}
		}
	}

	function corteVerba() {
		let acerto = Math.round(Math.random()*20) + $Messiah.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*20) + $Messiah.ataque + 20 ; //15
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf3.innerHTML = $Messiah.nome + " Cortou sua verba e causou " + dano + " de dano"
			},2000);
			movimentocortedeverba()
			setTimeout(function() {
				if ($Estudante.vida < 0) {
					vidaEstudante.style.width = "0px"
				} else {
					vidaEstudante.style.width = $Estudante.vida + "px"
				}	
			}, 3000)
		} else {
			setTimeout(function(){
    			inf3.innerHTML = $Messiah.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			bottonIformacao23.style.visibility = "hidden"

			setTimeout(function(){
				personagem.style.transform = "rotate(90deg)"
				fimBus()
			},5000);
		}
		setTimeout(function(){
    		inf3.innerHTML = "Fim do turno"
		},5000);
		
		setTimeout(function(){
			if ($Estudante.vida > 0) {
    			bottonIformacao.style.visibility = "visible"
    		}
		},6000);
		trocarTurno()
		
	}
	function movimentocortedeverba() {
		setTimeout(function(){
			personagemBus3.style.left = "400px"
			dinheiro.style.left = "600px"
		},400);
		setTimeout(function(){
		},500);
		setTimeout(function(){
			dinheiro.style.visibility = "visible"
			
		},1000);
		setTimeout(function(){
			personagem.style.top = "270px"
		},1400)
		setTimeout(function(){
			personagemBus3.style.left = "150px"
			dinheiro.style.left = "200px"
			personagem.style.top = "230px"
		},1500);
		setTimeout(function(){
			dinheiro.style.visibility = "hidden"
		},1900);

	}

	function motociata() {
		let acerto = Math.round(Math.random()*20) + $Messiah.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*20) + $Messiah.ataque + 20;
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf3.innerHTML = $Messiah.nome + " Chamou a motociata e causou " + dano + " de dano"
    			if ($Estudante.vida < 0) {
					vidaEstudante.style.width = "0px"
				} else {
					vidaEstudante.style.width = $Estudante.vida + "px"
				}
			},2000);
			movimentomotociata()
		} else {
			setTimeout(function(){
    			inf3.innerHTML = $Messiah.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			bottonIformacao23.style.visibility = "hidden"

			setTimeout(function(){
				personagem.style.transform = "rotate(90deg)"
				fimBus()
			},3000);
		}
		setTimeout(function(){
    		inf3.innerHTML = "Fim do turno"
		},5000);
		setTimeout(function(){
			if ($Estudante.vida > 0) {
    				bottonIformacao.style.visibility = "visible"
    			}
		},6000);
		trocarTurno()
	}
	function movimentomotociata() {
		personagemBus3.style.left = "100px"
		motociataImg.style.visibility = "visible"
		setTimeout(function(){
			motociataImg.style.left = "800px"
		},500);
		setTimeout(function(){
			personagem.style.transform = "rotate(45deg)"
			// personagem.style.top = "270px"
		},1500)
		setTimeout(function(){
			motociataImg.style.visibility = "hidden"
		},1000);
		setTimeout(function(){
			personagemBus3.style.left = "150px"
			personagem.style.transform = "rotate(0deg)"
			// personagem.style.top = "230px"
			motociataImg.style.left = "-660px"
		},3000);
	} 

	function fimBus() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus3.style.visibility = "hidden"
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
		inf3.innerHTML = $Estudante.nome + " atacou com Murro"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto;
		if (acerto >= $Messiah.def){
			let dano = Math.round(Math.random()*10) + $Estudante.ataque + 20 - $Messiah.def; //20
			setTimeout(function(){
    			inf3.innerHTML = $Estudante.nome + " Acertou um Murro com " + dano + " de dano"
				$Messiah.vidaCarlos -= dano;
				if ($Messiah.vidaCarlos < 0) {
					barraVidaBus3.style.width = "0px"
				} else {
					barraVidaBus3.style.width = $Messiah.vidaCarlos + "px"
				}
    			movimentoMurro()
			},2000);
			contadorPower++
			setTimeout(function(){
    				manaCor()
			},2500);
		} else {
			setTimeout(function(){
    				inf3.innerHTML = $Estudante.nome + " errou o ataque!"
			},2000);
		}
		setTimeout(function(){
			if ($Messiah.vidaCarlos <= 0) {
				console.log("opa")
				personagemBus3.style.transform = "rotate(-90deg)"
				personagemBus3.style.top = "150px"
				bottonIformacao23.style.visibility = "hidden"
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
    		personagemBus3.style.top = "190px"
		},500);
		setTimeout(function(){
			personagemBus3.style.top = "68px"
		},600);
		setTimeout(function(){
			personagem.style.left = "100px"
		},300);	
	} 

	let contadorCura = 0;
	let vidaAtual = $Estudante.vida;
	function curaEstudante() {
		if (contadorCura == 0) {
			inf3.innerHTML = $Estudante.nome + " Almoçou"
			let cura = Math.round(0.5 * vidaAtual)
			if ((cura + $Estudante.vida) > 194) {
				$Estudante.vida = 194
			} else {
				$Estudante.vida += cura
			}
			movimentoCura()
			setTimeout(function(){
				inf3.innerHTML = $Estudante.nome + " curou 50% do HP"
				vidaEstudante.style.width = $Estudante.vida + "px"
			},2000);
			contadorPower++
			manaCor()
		} else {
			inf3.innerHTML = "Opa! um almoço por dia, a carne ta cara!"
		}
		setTimeout(function(){
    		inf3.innerHTML = "Fim do turno"
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
			mana.style.width = "20%"
		} else if (contadorPower == 2) {
			mana.style.width = "40%"
		} else if (contadorPower == 3) {
			mana.style.width = "60%"
		} else if (contadorPower == 4) {
			mana.style.width = "80%"
		} else if (contadorPower == 5) {
			mana.style.width = "100%"
		}
	}
	function carregarPower() {
		if (contadorPower < 5 || $Estudante.vida > 97) { // || $Estudante.vida > 97
			inf3.innerHTML = "As condições não são favoráveis!"
		} else {
			power()
		}
	}

	function power() {
		inf3.innerHTML = $Estudante.nome + " pediu ajuda ao CodeMaster"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto + 3;
		if (acerto >= $Messiah.def){
			let dano = Math.round(Math.random()*20) + $Estudante.ataque + 50;
			setTimeout(function(){
				$Messiah.vidaCarlos -= dano;
    			inf3.innerHTML = "O CodeMaster surgiu e deu " + dano + " de dano"
    			if ($Messiah.vidaCarlos < 0) {
					barraVidaBus3.style.width = "0px"
				} else {
					setTimeout(function() {
						barraVidaBus3.style.width = $Messiah.vidaCarlos + "px"
					}, 3000);
				}
    			movimentoPower() 
			},4000);
		} else {
			setTimeout(function(){
    			inf3.innerHTML = $Estudante.nome + "não teve ajuda"
			},4000);
		}
		setTimeout(function(){
			if ($Messiah.vidaCarlos <= 0) {
				console.log("opa")
				personagemBus3.style.transform = "rotate(-90deg)"
				personagemBus3.style.top = "150px"
				bottonIformacao22.style.visibility = "hidden"
				setTimeout(function(){
    					fim()
    				},6000);
			}
		},6000);
		setTimeout(function(){
    		ataqueAleatorio()
		},10000);
		bottonIformacao.style.visibility = "hidden"
		contadorPower = 0;
		manaCor()
		setTimeout(function() {
			trocarTurno()
		},3000);
	} 
	function movimentoPower() {
		   allan.style.left = "670px"
		setTimeout(function(){
		    codando.style.top = "600px"
		},1000);
		setTimeout(function(){
			personagemBus3.style.top = "190px"
    		personagemBus3.style.transform = "rotate(5deg)"
		},2000);
		setTimeout(function(){
			allan.style.left = "850px"
			personagemBus3.style.top = "68px"
			personagemBus3.style.transform = "rotate(0deg)"
		},3000);	
	} 
	

	function fim() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus3.style.visibility = "hidden"
		fimBatalha.style.visibility = "visible"
		// $estadoTurno = false;
		setTimeout(function(){
    		trocarEstadoDoJogo('mapa3')
		},5000);
	}


</script>
<link rel="stylesheet" type="text/css" href="./styles/personagem3.css">

<!-- ************************ Messiah ************************ -->
<div class="bloco2">
	<div id="barraInformacoesBus3">
		<p class="nomeBus3">{$Messiah.nome}</p>
		<p class="nomeBus3">HP:</p>
		<div class="contornoBus3">
			<div  id="barraVidaBus3"></div>
		</div>	
	</div>
	<div id="personagemBus3">
		<img id="imagemMessiah" src="./images/bossBR.png" alt="Messiah">
	</div>
	<div id="dinheiro">
		<img id="dinheiroImg" src="./images/dinheiro.png" alt="dinheiro">
	</div>
	<div id="motociata">
		<img id="motociataImg" src="./images/motociata.png" alt="motociata">
		<img id="codando" src="./images/chuva.png" alt="matrix">
		<img id="allan" src="./images/Allan2.png" alt="allan">
	</div>
	<div id="bottonIformacao23">
		<p id="inf3">Você chegou ao IFPE IGARASSU! Porém, algo está errado. Defenda o IFPE!</p>
	</div>
</div>



<!-- ************************ ESTUDANTE IFPE ************************ -->
<div class="bloco2">
	<div id="personagem">
		<img src="./images/player.png" alt="personagem">
	</div>
	<div id="barraInformacoes">
		<p class="nome">EstudanteIFPE</p>
		<p class="nome">HP:</p>
		<div class="contorno">
			<div id="vidaEstudante"></div>
		</div>
		<div class="barraMana">
			<div id="mana"></div>
		</div>
	</div>
	<div id="bottonIformacao">
		<!-- <p id="inf3">nn</p> -->
		<ul id="listaStatus">
			<li>Nome: {$Estudante.nome}</li>
			<li>Proeficiência: D20 + {$Estudante.baseAcerto}</li>
			<li>Ataque: D10 + {$Estudante.ataque}</li>
			<li>Defesa: {$Estudante.def}</li>
			<li>Vida: 190</li>
		</ul>
		<div class="divAtaques">Murro</div>
		<div class="divAtaques">Almoço</div>
		<div class="divAtaques">Cheirinho</div>
		<div id="menuAtaques">
			<img id="mao" src="./images/hand.gif" alt="mãozinha">
		</div>
		<div id="fimBatalha">
			<h1>YOU WIN!</h1>
			<p> Parabéns! Você defendeu o IFPE por mais um dia! Obrigado por jogar!</p>
		</div>
	</div>
</div>