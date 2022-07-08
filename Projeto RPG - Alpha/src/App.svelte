<script>
	import Menu from "./Menu.svelte"
	import Mapa1 from "./mapa1.svelte"
	import Mapa2 from "./mapa2.svelte"	
	import Mapa3 from "./mapa3.svelte"
	import Batalha1 from "./Batalha.svelte"
	import Batalha2 from "./Batalha2.svelte"
	import Batalha3 from "./Batalha3.svelte"
	import { estado } from './Contents/Estado.js'
	import Sobre from "./sobre.svelte"
	import Ajuda from "./ajuda.svelte"
</script>


{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'jogar'}
	<Mapa1/>
{:else if $estado === 'mapa2'}
	<Mapa2/>
{:else if $estado === 'mapa3'}
	<Mapa3/>
{:else if $estado === 'batalha'}
	<Batalha1/>
{:else if $estado === 'batalha2'}
	<Batalha2/>
{:else if $estado === 'batalha3'}
	<Batalha3/>
{:else if $estado === 'sobre'}
	<Sobre/>
{:else if $estado === 'ajuda'}
	<Ajuda/>
{/if}
