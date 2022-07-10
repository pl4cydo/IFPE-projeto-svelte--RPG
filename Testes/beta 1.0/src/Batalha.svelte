<script type="text/javascript">
	import Personagem from "./Contents/Personagem.svelte"
	import Inimigo from "./Contents/Inimigo.svelte"
	
	
</script>

<main>
	<div class="container">
		<div class="principal">
			<div class="topRow">
				<Inimigo/>
				<Personagem/>
				<div id="InicioBatalha" > Iniciar </div>
			</div>
			<div class="bottonRow">
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
	#InicioBatalha {
		border: 1px solid black;
		width: 150px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		margin-left: 370px;
		margin-top: 200px;
		visibility: hidden;
	}
</style>
