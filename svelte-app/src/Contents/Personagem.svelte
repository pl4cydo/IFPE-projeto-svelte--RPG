<script type="text/javascript">
	import { Estudante } from "./Vida.js"
	import { Bus } from "./Vida.js"




	// ************************ BUS ************************

	function ataqueAleatorio() {
		let aleatorio = Math.round(Math.random()*10)
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

	function arranque() {
		let acerto = Math.round(Math.random()*20) + $Bus.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*12) + $Bus.ataque
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Acertou um Arranque com " + dano + " de dano"
			},2000);
			setTimeout(function(){
    			vidaEstudante3.style.width = $Estudante.vida + "px"
			},4000);
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			fimBus()
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
		},5000);
		setTimeout(function(){
    		bottonIformacao.style.visibility = "visible"
		},6000);

	}
	function queimarParada() {
		let acerto = Math.round(Math.random()*20) + $Bus.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*12) + $Bus.ataque + 10
			$Estudante.vida -= dano
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Queimou a parada e causou " + dano + " de dano"
    			vidaEstudante3.style.width = $Estudante.vida + "px"
			},2000);
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Bus.nome + " Errou!"
			},2000);
		}
		if ($Estudante.vida <= 0) {
			setTimeout(function(){
	    		fimBus()
			},5000);
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
		},6000);
		setTimeout(function(){
    		bottonIformacao.style.visibility = "visible"
		},8000);

	}

	function fimBus() {
		bottonIformacao.style.visibility = "hidden"
		barraInformacoes.style.visibility = "hidden"
		barraInformacoesBus.style.visibility = "hidden"
		alert("Você perdeu :) , recebeu 5 faltas, tente amanhã")
	}



// ************************ ESTUDANTE IFPE ************************
	
	
	function murro() {
		inf.innerHTML = $Estudante.nome + " atacou com Murro"
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto;
		if (acerto >= $Bus.def){
			let dano = Math.round(Math.random()*10) + $Estudante.ataque;
			setTimeout(function(){
    			inf.innerHTML = $Estudante.nome + " Acertou um Murro com " + dano + " de dano"
				$Bus.vidabus -= dano;
    			barraVidaBus.style.width = $Bus.vidabus + "px"
			},2000);
			contadorPower++
			manaCor()
		} else {
			setTimeout(function(){
    			inf.innerHTML = $Estudante.nome + " errou o ataque!"
			},2000);
		}
		setTimeout(function(){
    		inf.innerHTML = "Fim do turno"
		},5000);
		setTimeout(function(){
			if ($Bus.vidabus <= 0) {
				imagemBus.style.transform = "rotate(180deg)"
				bottonIformacao2.style.visibility = "hidden"
				setTimeout(function(){
    			fim()
    			},4000);
			}
		},6000);
		setTimeout(function(){
    		ataqueAleatorio()
		},8000);
		bottonIformacao.style.visibility = "hidden"
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
			let dano = Math.round(Math.random()*20) + $Estudante.ataque + 30;
			setTimeout(function(){
				$Bus.vidabus -= dano;
    			inf.innerHTML = $Estudante.nome + " acertou uma 'Vuadora' com " + dano + " de dano"
    			barraVidaBus.style.width = $Bus.vidabus + "px"
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
	} 

	

	function fim() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus.style.visibility = "hidden"
		alert("O Circular foi derrotado, continue com o " + $Estudante.nome + " para a proxima fase!")
		window.location.reload()
	}


</script>

<!-- ************************ BUS ************************ -->
<div class="bloco">
	<div id="barraInformacoesBus">
		<p class="nomeBus">{$Bus.nome}</p>
		<p class="nomeBus">HP:{$Bus.vidabus}</p>
		<div class="contornoBus">
			<div  id="barraVidaBus"></div>
		</div>	
	</div>
	<div class="personagemBus">
		<img id="imagemBus" src="./images/bus1.png"/>
	</div>
	<div id="bottonIformacao2">
		<p id="inf">O {$Bus.nome} apareceu, lute para conseguir subir no ônibus.</p>
	</div>
</div>



<!-- ************************ ESTUDANTE IFPE ************************ -->
<div class="bloco">
	<div class="personagem">
		<img src="./images/player.png">
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
		<div class="divAtaques" on:click={() => murro()}>Murro</div>
		<div class="divAtaques" on:click={() => curaEstudante()}>Lanche da Tia</div>
		<div class="divAtaques" on:click={() => carregarPower()}>'Vuadora'</div>
	</div>
</div>