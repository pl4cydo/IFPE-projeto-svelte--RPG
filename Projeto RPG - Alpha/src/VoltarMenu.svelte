<script>
	import { trocarEstadoDoJogo } from './Contents/Estado.js'
</script>

<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>

<style type="text/css">
	.voltar {
		position: absolute;
		padding: 0;
		margin-top: 25px;
		marfin-left: 900px;
		width: 300px;
		height: 50px;
		justify-content: center;
		align-items: center;
		margin-left: 300px;
		text-shadow: black 0.1em 0.1em 0.2em;
		color: snow;
	}
</style>