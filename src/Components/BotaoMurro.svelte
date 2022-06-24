<script>
	let proeficienciaSupermarlon = 3
	let lifeMessiah = 100
	function murro() {
		let acerto = Math.round(Math.random()*20) + proeficienciaSupermarlon
		if (acerto > 13) {
			let dano = Math.round(Math.random()*10) + 10 + proeficienciaSupermarlon
			lifeMessiah -= dano
			let vidaAtual = `${lifeMessiah}`
			lifebs.style.width = lifeMessiah + "px"
			bottonRow1.innerHTML = "<p>Super Marlon foi bem sucedido em dar um murro!<br> MESSIAH HP:" + vidaAtual + "</p>"  
		} else {
			bottonRow1.innerHTML = "<p>ERROU!</p>" 				
		}
	}
	function barradevida(){

	}

</script>

<button class="Murro" on:click={() => murro()} >
	Murro
</button>

<style>
	.Murro{
	width: 150px;
	background-color: #A9A9A9;
	border: 2px solid;
	border-color: black;
	border-radius: 3px;
	font-weight:bold;
	}

	.Murro:hover {
	background-color: black;
    color: white;
	}

</style>