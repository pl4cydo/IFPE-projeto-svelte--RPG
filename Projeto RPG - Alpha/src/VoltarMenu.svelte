<script>
	import { trocarEstadoDoJogo } from './Contents/Estado.js'
</script>

<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
	Voltar ao menu
</div>

<style type="text/css">
	.voltar {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 300px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 300px
	}
</style>