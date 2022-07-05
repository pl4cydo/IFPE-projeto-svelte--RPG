<script type="text/javascript">
	import Dev from "./Dev.svelte"
	import { estado } from './Contents/Estado.js'
	import { trocarEstadoDoJogo } from './Contents/Estado.js'
</script>

<link rel="stylesheet" type="text/css" href="./styles/menu.css">
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
			<div class="ajuda" on:click={() => trocarEstadoDoJogo('ajuda')}>
				<h1>AJUDA</h1>
			</div>
			<div class="sobre" on:click={() => trocarEstadoDoJogo('sobre')}>
				<h1>SOBRE</h1>
			</div>
			<div class="projeto">
				<h1>Demo Weak 2022.1</h1>
			</div>
		</div>
	</div>
</main>

<style>
	
</style>