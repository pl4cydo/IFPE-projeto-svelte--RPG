<script type="text/javascript">
	
	import { estado } from './Contents/Estado.js'
	import { trocarEstadoDoJogo } from './Contents/Estado.js'
</script>

<main>
	<div class="container">
		<div class="bloco">
			<div class="titulo">
				<h1>FINAL<br>IFPE</h1>
				<h3>Uma Jornada Esperada</h3>
			</div>
			<div class="jogar" on:click={() => trocarEstadoDoJogo('jogar')}>
				<h1>JOGAR</h1>
			</div>
			<div class="ajuda">
				<h1>AJUDA</h1>
			</div>
			<div class="sobre" on:click={() => trocarEstadoDoJogo('sobre')}>
				<h1>MAPA</h1>
			</div>
			<div class="projeto">
				<h1>Demo Weak 2022.1</h1>
			</div>
		</div>
	</div>
</main>

<style>
	body {
		padding: 0;
		margin: 0;
	}
	.container {
		width: 100%;
		height: 100hv;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.bloco {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 900px;
		height: 600px;
	}
	.titulo {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 400px;
		height: 300px;
		margin-left: 250px;
	}
	.titulo h1 {
		margin-top: 40px;
		margin-left: 100px;
		margin-bottom: 0;
		font: 50pt message-box;
	}
	.titulo h3 {
		margin-top: 10px;
		margin-left: 40px;
		font: 20pt message-box;
	}
	.jogar {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 300px;
		height: 50px;
		margin-left: 300px
	}
	.jogar h1 {
		margin-top: 10px;
		margin-left: 100px;
		font: 20pt message-box;
	}
	.ajuda {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 300px;
		height: 50px;
		margin-left: 300px
	}
	.ajuda h1 {
		margin-top: 10px;
		margin-left: 100px;
		font: 20pt message-box;
	}
	.sobre {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 300px;
		height: 50px;
		margin-left: 300px
	}
	.sobre h1 {
		margin-top: 10px;
		margin-left: 100px;
		font: 20pt message-box;
	}
	.projeto {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 300px;
		height: 50px;
		margin-left: 590px
	}
	.projeto h1 {
		margin-top: 10px;
		margin-left: 140px;
		font: 12pt message-box;
		margin-right: 0;
	}
</style>