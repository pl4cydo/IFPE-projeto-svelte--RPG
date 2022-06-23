<svelte:head>
	<link rel="stylesheet" href="styles/batalha.css">
</svelte:head>

<main id="main">
	<div id="container">
		<div id="bloco1">

			<!-- Parte de Cima da Tela -->
			<div id="topRow">

				<!-- PLAYER1 -->
				<img src="images/backgound.png" id="imageBackground">
				<div id="blocoPersonagem">

					<div id="hpp1">
						<span>HP:</span><br>
						<span>Super Marlon</span>
						<div class="barraHP">
							<div id="lifep1"></div>
						</div>

					</div>
					<div id="player1">
						<img src="images/player1.png">
					</div>

					<!-- INIMIGO -->
					<div id="inimigo">
						<img src="images/boss_semfundo.png">
					</div>
					<div id="hpbs">
						<span>HP:</span><br>
						<span>MESSIAH</span>
						<div class="barraHP">
							<div id="lifebs"></div>
						</div>
					</div>
				</div>
			</div>

			<!-- Parte de baixo da tela -->
			<div id="botton">
				<div id="bottonRow1"><p>Let's battle begins!</p></div>
				<div id="bottonRow2">
					<span class="Texto"> Movimentos</span><br>
					<button>Murro</button>
					<button>Power!</button>
				</div>
			</div>

		</div>
	</div>
</main>

<script type="text/javascript">
	import svelte from inicio_de_batalha
</script>