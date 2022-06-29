<script type="text/javascript">
	import { Estudante } from "./Vida.js"
	import { Bus } from "./Vida.js"


	// ************************ BUS ************************
	function arranque() {
		let acerto = Math.round(Math.random()*20) + $Bus.baseAcerto
		if (acerto >= $Estudante.def) {
			let dano = Math.round(Math.random()*12) + $Bus.ataque
			$Estudante.vida -= dano
			inf.innerHTML = $Bus.nome + " Acertou um Arranque com " + dano + " de dano"
			vidaEstudante3.style.width = $Estudante.vida + "px"
		} else {
			inf.innerHTML = $Bus.nome + " Errou!"
		}
		if ($Estudante.vida <= 0) {
			fimBus()
		}

	}

	function fimBus() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus.style.visibility = "hidden"
		alert("Você perdeu :) , recebeu 5 faltas, tente amanhã")
	}



// ************************ ESTUDANTE IFPE ************************
	

	function murro() {
		let acerto = Math.round(Math.random()*20) + $Estudante.baseAcerto;
		if (acerto >= $Bus.def){
			let dano = Math.round(Math.random()*10) + $Estudante.ataque;
			$Bus.vidabus -= dano;
			inf.innerHTML = $Estudante.nome + " Acertou um murro com " + dano + " de dano"
			barraVidaBus.style.width = $Bus.vidabus + "px"
		} else {
			inf.innerHTML = $Estudante.nome + " errou o ataque!"
		}
		if ($Bus.vidabus <= 0) {
			imagemBus.style.transform = "rotate(180deg)"
			fim()
		}
	}

	function fim() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus.style.visibility = "hidden"
		alert("O Circular foi derrotado, continue com o " + $Estudante.nome + " para a proxima fase!")
	}


</script>
<!-- ************************ BUS ************************ -->
<div class="bloco">
	<div id="barraInformacoesBus">
		<p class="nome">Circular (Botafogo)</p>
		<p class="nome">HP:{$Bus.vidabus}</p>
		<div class="contorno">
			<div  id="barraVidaBus"></div>
		</div>	
	</div>
	<div class="personagemBus">
		<img id="imagemBus" src="./images/bus1.png"/>
	</div>
	<div id="bottonIformacao2">
		<div id="ataqueMessiah" on:click={() => arranque()}> Test Ataque</div>
		<p id="inf"></p>
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
	</div>
	<div id="bottonIformacao">
		<!-- <p id="inf2">nn</p> -->
		<div class="divAtaques" on:click={() => murro()}>Murro</div>
		<div class="divAtaques">Ataque2</div>
		<div class="divAtaques">Ataque3</div>
	</div>
</div>


<style type="text/css">
	/************************* BUSS ************************ */
.bloco {
		width: 445px;
		height: 390px;
		border: 1px solid;
		border-color: black;
		display: flex;
		position: relative;
	}
	.personagemBus {
		border: 1px solid black;
		margin: 3px;
		width: 500px;
		height: 200px;
		margin-top: 185px;
		margin-left: 10px;
		position: absolute;
		overflow: hidden;
	}
	.personagemBus img {
		/*width: 150%;*/
		height: 300%;
		margin-top: -200px;
		margin-left: -50px;
		transform: scaleX(-1);
	}

	#imagemBus {

	}
	#barraInformacoesBus {
		border: 1px solid black;
		margin: 3px;
		width: 200px;
		height: 380px;
		margin: 4px;
		margin-left: 10px;
		position: absolute;
		visibility: hidden;
	}
	.contorno {
		width: 194px;
		height: 30px;
		border: 3px solid black;
	}
	#barraVidaBus {
		width: 194px;
		height: 30px;
		background-color: green;
	}
	.nome {
		margin: 5px;
	}
	#bottonIformacao2 {
		border: 1px solid;
		border-color: darkcyan;
		width: 440px;
		height: 190px;
		margin-top: 396px;
	/*	visibility: hidden;*/
	}
	#ataqueMessiah {
		border: 1px solid black;
		width: 100px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
	}






/************************* ESTUDANTE IFPE ************************ */
	.bloco {
		width: 445px;
		height: 390px;
		border: 1px solid;
		border-color: black;
		display: flex;
		position: relative;
	}
	.personagem {
		border: 1px solid black;
		margin: 3px;
		width: 150px;
		height: 150px;
		margin-top: 234px;
		margin-left: 100px;
		position: absolute;
	}
	.personagem img {
		width: 100%;
		height: 100%;
		transform: scaleX(-1);
	}
	#barraInformacoes {
		border: 1px solid black;
		margin: 3px;
		width: 200px;
		height: 380px;
		margin: 4px;
		margin-left: 230px;
		position: absolute;
		visibility: hidden;
	}
	.contorno {
		width: 194px;
		height: 30px;
		border: 3px solid black;
	}
	#vidaEstudante3 {
		width: 194px;
		height: 30px;
		background-color: green;
	}
	#bottonIformacao {
		border: 1px solid;
		border-color: darkcyan;
		width: 440px;
		height: 190px;
		margin-top: 396px;
		visibility: hidden;
	}
	.nome {
		margin: 5px;
	}
	.divAtaques {
		border: 1px solid black;
		width: 150px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px;
		margin-left: 270px;
	}
</style>