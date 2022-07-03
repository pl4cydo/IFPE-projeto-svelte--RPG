<script>
	import Menu from "./Menu.svelte"
	import Mapa1 from "./mapa1.svelte"
	import Batalha1 from "./Batalha.svelte"
	import { estado } from './Contents/Estado.js'
	import Sobre from "./sobre.svelte"
	import Mapa2 from "./mapa2.svelte"	
</script>


<!-- <Menu/> -->
<!-- <Mapa1/> -->
<!-- <Mapa2/> -->
<!-- <Batalha1/> -->
<!-- <Sobre/> -->


{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'jogar'}
	<Mapa1/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'batalha'}
	<Batalha1/>
{:else if $estado === 'mapa2'}
	<Mapa2/>
{/if}