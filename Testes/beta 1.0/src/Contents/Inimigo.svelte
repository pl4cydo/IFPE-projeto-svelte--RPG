
<script type="text/javascript">
	import { vidaMessiah } from "./Vida.js"
	import { vidaEstudante } from "./Vida.js"
	import { trocarEstadoDoJogo } from './Estado.js'

	let vidaAluno1;
	vidaEstudante.subscribe((value) => {
		vidaAluno1 = value
	})

	let vidaBoss1
	vidaMessiah.subscribe((value) => {
		vidaBoss1 = value
	})
	// export function iniciarMessiah() {
	// 	bottonIformacao.style.visibility = "visible"
	// }

	// export function ataqueMessiah() {
	// 	let ataqueMessiahAleatorio = Math.round(Math.random()*1)
	// 	if (ataqueMessiahAleatorio == 0) {
	// 		corteVerba()
	// 	} else {
	// 		paoComLeiteCondensado()
	// 	}
		
	// 	console.log(ataqueMessiahAleatorio)
	// }
	var danoMessiah;
	function corteVerba() {
		if (vidaAluno1 < 0) {
			trocarEstadoDoJogo('sobre')
		}
		let acertoMessiah = Math.round(Math.random()*20);
		if (acertoMessiah > 10) {
			danoMessiah = Math.round(Math.random()*30) + 10
			vidaAluno1 -= danoMessiah
			vidaEstudante3.style.width = vidaAluno1 + "px"
			inf.innerHTML = "Ataque Corte de Verba!"
		} else {
			inf.innerHTML = "O STF bloqueou o ataque, Messiah está impedido!"
		}


		
	}
	// function paoComLeiteCondensado() {
	// 	console.log('paoComLeiteCondensado')
	// 	let acertoLeiteCondensado = Math.round(Math.random()*10)
	// 	if (acertoLeiteCondensado >= 0) {

	// 	} 
	// }
	// ataque VAGABUNDO
	
 	
</script>

<div class="bloco">
	<div class="barraInformacoes">
		<p class="nome">MESSAIAH</p>
		<p class="nome">HP: {vidaBoss1}</p>
		<div class="contorno">
			<div  id="barraVidaMessiah"></div>
		</div>
	</div>
	<div class="personagem">
		<img src="./images/boss_semfundo.png">
	</div>
	<div id="bottonIformacao">
		<div id="ataqueMessiah" on:click={() => corteVerba()}> Test Ataque</div>
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
	.personagem {
		border: 1px solid black;
		margin: 3px;
		width: 250px;
		height: 250px;
		margin-top: 138px;
		margin-left: 170px;
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
		margin-left: 10px;
		position: absolute;
	}
	.contorno {
		width: 194px;
		height: 30px;
		border: 3px solid black;
	}
	#barraVidaMessiah {
		width: 194px;
		height: 30px;
		background-color: green;
	}
	.nome {
		margin: 5px;
	}
	#bottonIformacao {
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