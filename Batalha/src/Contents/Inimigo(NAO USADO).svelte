
<script type="text/javascript">
	import { Bus } from "./Vida.js"
	import { Estudante } from "./Vida.js"


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
			fim()
		}

	}

	function fim() {
		barraInformacoes.style.visibility = "hidden"
		bottonIformacao.style.visibility = "hidden"
		barraInformacoesBus.style.visibility = "hidden"
		alert("Você perdeu :) , recebeu 5 faltas, tente amanhã")
	}

	
 	
</script>

<div class="bloco">
	<div id="barraInformacoesBus">
		<p class="nome">Circular (Botafogo)</p>
		<p class="nome">HP:{$Bus.vida}</p>
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


<style type="text/css">
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

</style>