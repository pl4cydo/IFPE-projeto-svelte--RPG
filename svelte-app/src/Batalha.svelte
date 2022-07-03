<script type="text/javascript">
	import Personagem from "./Contents/Personagem.svelte"
	import { Estudante } from "./Contents/Vida.js"
	import { Bus } from "./Contents/Vida.js"
	
	function iniciar() {
		barraInformacoes.style.visibility = "visible"
		bottonIformacao.style.visibility = "visible"
		barraInformacoesBus.style.visibility = "visible"
		InicioBatalha.style.visibility = "hidden"
		bottonIformacao2.style.width = "420px"

	}

</script>


<main>
	<div class="container">
		<div class="principal">
			<div class="topRow">
				<Personagem/>
				<div id="InicioBatalha" on:click={() => iniciar()}> Iniciar </div>
			</div>
			<div class="bottonRow">
			</div>
		</div>
	</div>
</main>
	

<style type="text/css">
	/*body {
		margin: 0;
		padding: 0;
	}*/
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
	}
	.principal {
		padding: 0;
		margin-top: 0px;
		border-radius: 7px;
		box-shadow: 3px 3px grey;;
		border: 5px solid;
		border-color: white;
		width: 900px;
		height: 600px;
		background: rgb(143,145,162);
		background: linear-gradient(135deg, rgba(143,145,162,1) 0%, rgba(0,7,93,1) 100%); 
		/*display: flex;*/
		flex-direction: row;
/*		align-items: center;
		justify-content: center;*/
	}
	.topRow {
		width: 880px;
		height: 370px;
		display: flex;
		margin-top: 5px;
		margin-left: 3px;
		border: 5px solid;
		border-radius: 7px;
		border-color: white;
		box-shadow:  3px 3px grey;
		/*overflow: hidden;*/
	}

	.bottonRow {
		width: 880px;
		height: 192px;
		margin: 4px;
		margin-left: 3px;
		display: flex;
		border: 5px solid;
		border-radius: 7px;
		border-color: white;
		box-shadow:  3px 3px grey;
		background: rgb(0,19,196);
		background: linear-gradient(135deg, rgba(0,19,196,1) 0%, rgba(0,7,93,1) 100%);

	}
	#InicioBatalha {
		border: 3px solid;
		border-radius: 3px;
		border-color: white;
		box-shadow:  3px 3px grey;
		background: rgb(0,213,213);
		background: linear-gradient(190deg, rgba(0,213,213,1) 0%, rgba(0,139,139,1) 100%);
		width: 150px;
		height: 40px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		margin-left: 370px;
		margin-top: 200px;
		visibility: visible;
		font: 15pt message-box;
		color: white;
	}


	
</style>
