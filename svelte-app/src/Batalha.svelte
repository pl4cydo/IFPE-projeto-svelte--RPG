<script type="text/javascript">
	import Personagens from "./Contents/Personagens.svelte"
	import Boss from "./Contents/Boss.svelte"
	// import {dale} from "./Contents/Personagens.svelte"
</script>

<main>
	<div class="container">
		<div class="principal">
			<div class="topRow">
				<Boss/>
				<Personagens/>
			</div>
			<div class="bottonRow">
				<div class="menu">
					
				</div>
				<div class="personagens">
				</div>
				<div class="movimentos"></div>
			</div>
		</div>
	</div>
</main>
	

<style type="text/css">
	body {
		margin: 0;
		padding: 0;
	}
	.container {
		width: 100%;
		height: 100hv;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.principal {
		padding: 0;
		margin-top: 15px;
		border: 1px solid;
		border-color: darkcyan;
		width: 900px;
		height: 600px;
		/*display: flex;*/
		flex-direction: row;
		/*align-items: center;
		justify-content: center;*/
	}
	.topRow {
		border: 1px solid;
		border-color: darkcyan;
		width: 890px;
		height: 390px;
		margin: 4px;
		margin-left: 4px;
		display: flex;
	}

	.bottonRow {
		border: 1px solid;
		border-color: darkcyan;
		width: 890px;
		height: 195px;
		margin: 4px;
		margin-left: 4px;
		display: flex;
	}
	.menu {
		border: 1px solid;
		border-color: darkred;
		width: 30%;
		height: 185px;
		margin: 4px;
		margin-left: 4px;
	}
	.personagens {
		border: 1px solid;
		border-color: cyan;
		width: 30%;
		height: 185px;
		margin: 4px;
		margin-left: 4px;
	}
	.lista {
		margin: 30px;
	}
	.movimentos {
		border: 1px solid;
		border-color: darkcyan;
		width: 40%;
		height: 185px;
		margin: 4px;
		margin-left: 4px;
	}
	
</style>
