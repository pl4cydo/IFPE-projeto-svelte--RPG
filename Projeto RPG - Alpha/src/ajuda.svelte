<script type="text/javascript">
	import { trocarEstadoDoJogo } from './Contents/Estado.js'	
</script>

<div class="container">
	<div class="bloco">
		<main id="mainSobre">
			<h1>AJUDA</h1>
			<h2>COMO JOGAR</h2>
			<h3>MAPAS:</h3>
			  <h4>- Use as SETAS do teclado para mover o Estudante no mapa e pressione ESPAÇO para selecionar as batalhas.</h4>
			  	<h3>BATALHAS:</h3>
			  <h4>- Use o CURSOR do MOUSE para iniciar a batalha.</h4>
			  <h4>- Use as SETAS do teclado para escolher entre as habilidades e pressione ESPAÇO para escolher qual usar.</h4>
			  <h3>*Ao fim das batalhas espere que você será redirecioando para a próxima fase.</h3>
		</main>
		<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
			Voltar ao menu
		</div>
	</div>
</div>


<style type="text/css">
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bloco {
		padding: 0;
		width: 900px;
		height: 600px;
		border: 5px solid;
		border-radius: 7px;
		border-color: white;
		box-shadow:  3px 3px grey;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#mainSobre {
		margin-top: -50px;
		color: snow;
		font: 12pt message-box;
		text-shadow: black 0.1em 0.1em 0.2em;
		margin-left: 15px;
	}
	#mainSobre h3 {
		margin-top: 40px;
 		margin-bottom: 30px;
	}
	.voltar {
		position: absolute;
		padding: 0;
		margin-top: 550px;
		margin-left: 900px;
		width: 300px;
		height: 50px;
		justify-content: center;
		align-items: center;
		text-shadow: black 0.1em 0.1em 0.2em;
		color: snow;
	}
</style>