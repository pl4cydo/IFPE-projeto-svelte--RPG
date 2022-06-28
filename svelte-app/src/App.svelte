<script>
	import Menu from "./Menu.svelte"
	import Mapa from "./Mapa.svelte"
	import Batalha from "./Batalha.svelte"

	import { estado } from './Estado.js'

</script>


<!-- <Menu/> -->
<!-- <Mapa/> -->
<Batalha/>
<!-- 
{#if $estado === 'menu'}
	<Menu/>
{:else if $estado === 'sobre'}
	<Mapa/>
{:else if $estado === 'jogar'}
	<Batalha/>
{/if} -->