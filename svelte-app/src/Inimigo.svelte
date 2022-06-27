
<script type="text/javascript">

	
</script>

<div class="bloco">
	<div class="barraInformacoes">
		<p class="nome">MESSAIAH</p>
		<p class="nome">HP:</p>
		<div class="contorno">
			<div class="vida"></div>
		</div>
	</div>
	<div class="personagem">
		<img src="./images/boss_semfundo.png">
	</div>
	<div class="bottonIformacao">
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
	.vida {
		width: 194px;
		height: 30px;
		background-color: green;
	}
	.nome {
		margin: 5px;
	}
	.bottonIformacao {
		border: 1px solid;
		border-color: darkcyan;
		width: 440px;
		height: 190px;
		margin-top: 396px;
	}
</style>