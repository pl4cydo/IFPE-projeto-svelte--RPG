<script type="text/javascript">
	import { vidaMessiah } from "./Vida.js"
	import { vidaEstudante } from "./Vida.js"

	let vidaAluno;
	vidaEstudante.subscribe((value) => {
		vidaAluno = value
	})


	let vidaBoss;
	vidaMessiah.subscribe((value) => {
		vidaBoss = value
	})

	var danoEstudante;
	function murro() {
		let acerto = Math.round(Math.random()*10)
		if (acerto > 0) {
			danoEstudante = Math.round(Math.random()*10) + 10
		 		vidaBoss -= danoEstudante
		 		// let danoPorcento = (vidaBoss/100)*240;
		 		inf.innerHTML = "Murro" 
		 		barraVidaMessiah.style.width = vidaBoss + "px"
		} else {
			inf.innerHTML = "errou"
		}
		increment()
	}

	function increment() {
		vidaMessiah.update((value) => {
			return value - danoEstudante
		})
	}

</script>

<div class="bloco">
	<div class="personagem">
		<img src="./images/player.png">
	</div>
	<div class="barraInformacoes">
		<p class="nome">EstudanteIFPE</p>
		<p class="nome">HP: {vidaAluno}</p>
		<div class="contorno">
			<div id="vidaEstudante3"></div>
		</div>
	</div>
	<div class="bottonIformacao">
		<!-- <p id="inf2">nn</p> -->
		<div class="divAtaques" on:click={() => murro()}>Murro</div>
		<div class="divAtaques">Ataque2</div>
		<div class="divAtaques">Ataque3</div>
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
	#vidaEstudante3 {
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