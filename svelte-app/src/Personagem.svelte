<script type="text/javascript">
	import { vidaMessiah } from "./vidamessiah.js"

	let vidaBoss
	vidaMessiah.subscribe((value) => {
		vidaBoss = value
	})

	function murro() {
		let acerto = Math.round(Math.random()*10)
		if (acerto > 5) {
			let dano = Math.round(Math.random()*10) + 10
		 		vidaBoss -= dano
		 		inf.innerHTML = vidaBoss
		 		barraVidaMessiah.style.width = vidaBoss + "px"
		} else {
			inf.innerHTML = "errou" + vidaBoss
		}
	}
</script>

<div class="bloco">
	<div class="personagem">
		<img src="./images/player.png">
	</div>
	<div class="barraInformacoes">
		<p class="nome">EstudanteIFPE</p>
		<p class="nome">HP:</p>
		<div class="contorno">
			<div class="vidaEstudante"></div>
		</div>
	</div>
	<div class="bottonIformacao">
		<button on:click={() => murro()}>Murro</button>
		<p id="inf2">nn</p>
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
	.personagem {
		border: 1px solid black;
		margin: 3px;
		width: 150px;
		height: 150px;
		margin-top: 234px;
		margin-left: 70px;
		position: absolute;
	}
	.personagem img {
		width: 100%;
		height: 100%;
		transform: scaleX(-1);
	}
	.barraInformacoes {
		border: 1px solid black;
		margin: 3px;
		width: 200px;
		height: 380px;
		margin: 4px;
		margin-left: 230px;
		position: absolute;
	}
	.contorno {
		width: 194px;
		height: 30px;
		border: 3px solid black;
	}
	.vidaEstudante {
		width: 194px;
		height: 30px;
		background-color: green;
	}
	.bottonIformacao {
		border: 1px solid;
		border-color: darkcyan;
		width: 440px;
		height: 190px;
		margin-top: 396px;
	}
	.nome {
		margin: 5px;
	}
</style>