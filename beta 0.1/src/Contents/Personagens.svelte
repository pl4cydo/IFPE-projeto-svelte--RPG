<script>
import SuperMarlonBotao from "./SuperMarlonBotao.svelte"


	let superMarlon = {
		name: "SuperMarlon",
		vida: 100,
		ataque: 10,
	}
	let brenoca = {
		name: "Brenoca",
		vida: 150,
		ataque: 8,
	}
	let geneWeed = {
		name: "GeneWeed",
		vida: 80,
		ataque: 20,
	}
	let placeudoCodigo = {
		name: "PlaceudoCódigo",
		vida: 100,
		ataque: 10,
	}

	function init() {
		const playerArray = [superMarlon, brenoca, geneWeed, placeudoCodigo];

		let heroIndex = prompt("escolhe o personagem: 0 - Super Marlon, 1 - brenoca, 2 - GeneWeed, 3 PlaceudoCódigo ");
		var player = playerArray[heroIndex];


		document.getElementById("playerName").innerHTML ="Nome: " + player.name;
		document.getElementById("playerVida").innerHTML = "HP: " + player.vida;
		document.getElementById("playerAtaque").innerHTML ="Ataque: " + player.ataque;		
	}

	function dale() {
		init()
		
	}

	
	// window.onload = function() {
		
	// }


</script>


<div class="playerBloco">
	<div class="battlebloc">
		<img class="player1" src="images/player.png">
		<img class="player2" src="images/player.png">
		<img class="player3" src="images/player.png">
		<img class="player4" src="images/player.png">
	</div>
	<div class="divisao">
		<div class="hpbloc">
			<div class="name">
				<p class="name2">SuperMarlon</p>
				<div class="contorno">
					<div class="life1"></div>
				</div>
				<p class="name2">Brenoca</p>			
				<div class="contorno">
					<div class="life2"></div>
				</div>
				<p class="name2">GeneWeed</p>
				<div class="contorno">
					<div class="life3"></div>
				</div>
				<p class="name2">PlaceudoCod</p>
				<div class="contorno">
					<div class="life4"></div>
				</div>
			</div>				
		</div>
	</div>
	<ul class="status">
		<li class="listaAparencia" id="playerName"></li>
		<li class="listaAparencia" id="playerVida"></li>
		<li class="listaAparencia" id="playerAtaque"></li>
	</ul>
	<button class="botaoComecar" on:click={() => dale()}>Começar!</button>
	<div id="areaBotao"></div>
</div>

<style type="text/css">
	.playerBloco {
		display: flex;
	}
	.hpbloc {
		border: 1px solid;
		border-color: darkcyan;
		width: 110px;
		height: 380px;
		margin: 4px;
		margin-left: 4px;
		

	}
	.contorno {
		width: 100px;
		height: 30px;
		border: 3px solid;
		border-color: black;
		margin: 1px;
		margin-top: 3px;
	}
	.battlebloc {
		border: 1px solid;
		border-color: darkcyan;
		width: 315px;
		height: 380px;
		margin: 4px;
		margin-left: 4px;
	}
	.name {

	}
	.name2 {
		margin: 0;
		margin-top: 20px;
		margin-left: 10px;
		margin-right: 20px;
	}
	.player1 {
		height: 120px;
		transform: scaleX(-1);
		margin-left: 180px;
	}
	.life1 {
		width: 100px;
		height: 30px;
		background-color: green;
	}
	.player2 {
		height: 120px;
		transform: scaleX(-1);
		margin-top: -40px;
		margin-left: 200px;
	}
	.life2 {
		width: 100px;
		height: 30px;
		background-color: green;
	}
	.player3 {
		height: 120px;
		transform: scaleX(-1);
		margin-left: 180px;
		margin-top: -40px;
	}
	.life3 {
		width: 100px;
		height: 30px;
		background-color: green;
	}
	.player4 {
		height: 120px;
		transform: scaleX(-1);
		margin-top: -40px;
		margin-left: 200px;
	}
	.life4 {
		width: 100px;
		height: 30px;
		background-color: green;
	}
	.status {
		border: 1px solid;
		border-color: cyan;
		width: 218px;
		height: 185px;
		margin-top: 400px;
		margin-left: -173px;
		position: absolute;
		visibility: visible;
	}
	.listaAparencia {
		font: 15pt status-bar;
		margin: 10px;
	}
	.botaoComecar {
		position: absolute;
		margin-top: 405px;
		margin-left: -400px;

	}
</style>

