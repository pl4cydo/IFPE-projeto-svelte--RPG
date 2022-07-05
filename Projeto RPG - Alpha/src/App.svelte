<script>
	import Menu from "./Menu.svelte"
	import Mapa1 from "./mapa1.svelte"
	import Mapa2 from "./mapa2.svelte"	
	import Mapa3 from "./mapa3.svelte"
	import Batalha1 from "./Batalha.svelte"
	import Batalha2 from "./Batalha2.svelte"
	import { estado } from './Contents/Estado.js'
	import Sobre from "./sobre.svelte"
	import Dev from "./Dev.svelte"
</script>


<!-- <Menu/> -->
<!-- <Mapa1/> -->
<!-- <Mapa2/> -->
<!-- <Mapa3/> -->
<!-- <Batalha1/> -->
<!-- <Batalha2/> -->
<!-- <Sobre/> -->


{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'jogar'}
	<Mapa1/>
{:else if $estado === 'mapa2'}
	<Mapa2/>
{:else if $estado === 'mapa2'}
	<Mapa3/>
{:else if $estado === 'batalha'}
	<Batalha1/>
{:else if $estado === 'batalha2'}
	<Batalha2/>
{:else if $estado === 'sobre'}
	<Sobre/>
{/if}






<!-- <div class="containerApp">
	<div class="blocoApp">
		<Dev/>
	</div>
</div> -->






<style type="text/css">
	.containerApp {
		width: 100%;
		height: 100vh;
		display: flex;
		/*flex-direction: row;*/
		justify-content: center;
		align-items: center;
	}
	.blocoApp {
		padding: 0;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		margin-left: 1100px;
		border: 1px solid;
		border-color: red;
		width: 200px;
		height: 600px;
	}
</style>