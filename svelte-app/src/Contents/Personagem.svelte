<script type="text/javascript">
	import { Estudante } from "./Vida.js"
	import { Bus } from "./Vida.js"
	import { estado } from './Estado.js'
	import { trocarEstadoDoJogo } from './Estado.js'
	import { estadoTurno } from "./Vida.js"


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
       case 13:
       		if ($estadoTurno != false) {
	       		if (menuEixoY == 399) {
	       			murro()
	       		} else if (menuEixoY == 454) {
	       			curaEstudante()
	       		} else if (menuEixoY == 509) {
	       			power()
	       		} 
	       	}
       		// alert("ENTER")
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

	



	// ************************ BUS ************************

	function ataqueAleatorio() {
		let aleatorio = Math.round(Math.random()*10)
		if ($Bus.vidabus > 0) {
			if (aleatorio < 8) {
				inf.innerHTML = $Bus.nome + " Tentou atacar com Arranque "
				setTimeout(function(){
					arranque()
				},2000);
			} else {
				inf.innerHTML = $Bus.nome + " Tentou Queimar a Parada "
				setTimeout(function(){
					queimarParada()	
				},2000); 
			}
		}
	}

	function arranque() {
		let acerto = Math.round(Math.random()*20) + $Bus.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*20) + $Bus.ataque + 10;
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Acertou um Arranque com " + dano + " de dano"
			},2000);
			setTimeout(function(){
    			vidaEstudante3.style.width = $Estudante.vida + "px"
			},4000);
			movimentoArranque()
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			bottonIformacao2.style.visibility = "hidden"

			setTimeout(function(){
				personagem.style.transform = "rotate(90deg)"
				fimBus()
			},3000);
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
		},5000);
		
		setTimeout(function(){
			if ($Estudante.vida > 0) {
    				bottonIformacao.style.visibility = "visible"
    			}
		},6000);
		trocarTurno()
		
	}
	function movimentoArranque() {
		personagemBus.style.transform = "rotate(-10deg)"
		setTimeout(function(){
			personagemBus.style.left = "300px"
		},400);
		setTimeout(function(){
			personagemBus.style.transform = "rotate(0deg)"
			personagem.style.transform = "rotate(45deg)"
			personagem.style.top = "250px"
		},500);
		setTimeout(function(){
			personagemBus.style.left = "10px"
		},1000);
		setTimeout(function(){
			personagem.style.transform = "rotate(0deg)"
			personagem.style.top = "230px"
		},1500);
	}

	function queimarParada() {
		let acerto = Math.round(Math.random()*20) + $Bus.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*20) + $Bus.ataque + 30
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Queimou a parada e causou " + dano + " de dano"
    			vidaEstudante3.style.width = $Estudante.vida + "px"
			},2000);
			movimentoQueimarParada()
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			bottonIformacao2.style.visibility = "hidden"

			setTimeout(function(){
				personagem.style.transform = "rotate(90deg)"
				fimBus()
			},3000);
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
		},5000);
		setTimeout(function(){
			if ($Estudante.vida > 0) {
    				bottonIformacao.style.visibility = "visible"
    			}
		},6000);
		trocarTurno()
	}
	function movimentoQueimarParada() {
		personagemBus.style.left = "400px"
		setTimeout(function(){
			personagem.style.transform = "rotate(45deg)"
			personagem.style.top = "250px"
		},500);
		setTimeout(function(){
			personagemBus.style.left = "10px"
		},1000);
		setTimeout(function(){
			personagem.style.transform = "rotate(0deg)"
			personagem.style.top = "230px"
		},1500);
	} 

	function fimBus() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus.style.visibility = "hidden"
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
		inf.innerHTML = $Estudante.nome + " atacou com Murro"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto + 20;
		if (acerto >= $Bus.def){
			let dano = Math.round(Math.random()*10) + $Estudante.ataque + 187;
			setTimeout(function(){
    			inf.innerHTML = $Estudante.nome + " Acertou um Murro com " + dano + " de dano"
				$Bus.vidabus -= dano;
    			barraVidaBus.style.width = $Bus.vidabus + "px"
    			movimentoMurro()
			},2000);
			contadorPower++
			setTimeout(function(){
    			manaCor()
			},2500);
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Estudante.nome + " errou o ataque!"
			},2000);
		}
		setTimeout(function(){
			if ($Bus.vidabus <= 0) {
				imagemBus.style.transform = "rotate(180deg)"
				bottonIformacao2.style.visibility = "hidden"
				setTimeout(function(){
    					fim()
    				},4000);
			}
		},2000);
		setTimeout(function(){
    			ataqueAleatorio()
		},5000);
		trocarTurno()
		bottonIformacao.style.visibility = "hidden"
	}
	function movimentoMurro() {
		personagem.style.left = "0"
		setTimeout(function(){
    		personagemBus.style.top = "190px"
		},500);
		setTimeout(function(){
			personagemBus.style.top = "170px"
		},600);
		setTimeout(function(){
			personagem.style.left = "100px"
		},300);	
	} 

	let contadorCura = 0;
	let vidaAtual = $Estudante.vida;
	function curaEstudante() {
		if (contadorCura == 0) {
			inf.innerHTML = $Estudante.nome + "comeu um lanche e recuperou vida"
			let cura = Math.round(0.3 * vidaAtual)
			if ((cura + $Estudante.vida) > 194) {
				$Estudante.vida = 194
				
			} else {
				$Estudante.vida += cura
			}
			movimentoCura()
			setTimeout(function(){
				inf.innerHTML = $Estudante.nome + " curou 30% do HP atual"
				vidaEstudante3.style.width = $Estudante.vida + "px"
			},2000);
			contadorPower++
			manaCor()
		} else {
			inf.innerHTML = "Opa! a bolsa permanência é para a passagem. Um lanche por dia!"
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
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
			inf.innerHTML = "Falta energia, use outro movimento nesse turno."
		} else {
			power()
		}
	}

	function power() {
		inf.innerHTML = $Estudante.nome + " tomou distância"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto + 3;
		if (acerto >= $Bus.def){
			let dano = Math.round(Math.random()*20) + $Estudante.ataque + 50;
			setTimeout(function(){
				$Bus.vidabus -= dano;
    			inf.innerHTML = $Estudante.nome + " acertou uma 'Vuadora' com " + dano + " de dano"
    			barraVidaBus.style.width = $Bus.vidabus + "px"
    			movimentoPower() 
			},4000);
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Estudante.nome + " caiu no meio-fio e passou longe."
			},4000);
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
		},7000);
		setTimeout(function(){
			if ($Bus.vidabus <= 0) {
				imagemBus.style.transform = "rotate(180deg)"
				bottonIformacao2.style.visibility = "hidden"
				setTimeout(function(){
    					fim()
    				},4000);
			}
		},8000);
		setTimeout(function(){
    			ataqueAleatorio()
		},5000);
		bottonIformacao.style.visibility = "hidden"
		contadorPower = 0;
		manaCor()
		trocarTurno()
	} 
	function movimentoPower() {
		personagem.style.left = "0"
		personagem.style.transform = "rotate(55deg)"
		personagem.style.top = "130px"

		setTimeout(function(){
    		personagemBus.style.top = "190px"
    		personagemBus.style.transform = "rotate(5deg)"
		},500);
		setTimeout(function(){
			personagemBus.style.top = "170px"
			personagemBus.style.transform = "rotate(0deg)"
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
		barraInformacoesBus.style.visibility = "hidden"
		fimBatalha.style.visibility = "visible"
		// $estadoTurno = false;
		setTimeout(function(){
    			trocarEstadoDoJogo('mapa2')
		},5000);
	}


</script>
<link rel="stylesheet" type="text/css" href="./styles/personagem.css">

<!-- ************************ BUS ************************ -->
<div class="bloco">
	<div id="barraInformacoesBus">
		<p class="nomeBus">{$Bus.nome}</p>
		<p class="nomeBus">HP:{$Bus.vidabus}</p>
		<div class="contornoBus">
			<div  id="barraVidaBus"></div>
		</div>	
	</div>
	<div id="personagemBus">
		<img id="imagemBus" src="./images/bus1.png" alt="bus">
	</div>
	<div id="bottonIformacao2">
		<p id="inf">O {$Bus.nome} apareceu, lute para conseguir subir no ônibus.</p>
	</div>
</div>



<!-- ************************ ESTUDANTE IFPE ************************ -->
<div class="bloco">
	<div id="personagem">
		<img src="./images/player.png" alt="personagem">
	</div>
	<div id="barraInformacoes">
		<p class="nome">EstudanteIFPE</p>
		<p class="nome">HP:{$Estudante.vida}</p>
		<div class="contorno">
			<div id="vidaEstudante3"></div>
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
		<div id="menuAtaques"></div>
		<div id="fimBatalha">
			<h1>YOU WIN!</h1>
			<p> Agora suba no ônibus derrotado e siga para o IFPE</p>
		</div>
	</div>
</div>