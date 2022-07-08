<script type="text/javascript">
	import VoltarMenu from "./VoltarMenu.svelte"	
</script>

<div class="container">
	<div class="bloco">
		<main id="mainSobre">
			<h2>INFORMAÇÕES SOBRE O JOGO</h2>
			<h3>DESENVOLVEDORES</h3>
			<p>
					   Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Plácydo Lima, 25 anos
				<br /> Residencia: Camaragibe-PE
				<br />
				<a href="https://www.linkedin.com/in/pl%C3%A1cydo-lima-49a179223/">LinkedIn</a> @plácydo-lima
				<br /> <a href="https://github.com/pl4cydo">GitHub</a> @pl4cydo
			</p>

			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Daniel Filipe, 21 anos
				<br /> Residencia: Igarassu-PE
			</p>
			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Geneton Neto, 23 anos
				<br /> Residencia: Paulista-PE
				<br />
				<a href="https://www.linkedin.com/in/geneton-neto/">LinkedIn</a> @geneton-neto
				<br /> <a href="https://github.com/genetonneto">GitHub</a> @genetonneto
			</p>

			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Breno Rafael
				<br /> Idade: 27
				<br /> Residencia: Igarassua-PE
			</p>
			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Marlon Mateus
				<br /> Idade:22
				<br /> Residencia: Igarassua-PE
				<br /> <a href="https://github.com/Marlon99bit">GitHub</a> @Marlon99bit
			</p>
		</main>
		<VoltarMenu/>
	</div>
</div>


<style type="text/css">
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.bloco {
		padding: 0;
		width: 900px;
		height: 590px;
		border: 5px solid;
		border-radius: 7px;
		border-color: white;
		box-shadow:  3px 3px grey;
	}
	#mainSobre {
		margin-top: -7px;
		color: snow;
		font: 10pt message-box;
		text-shadow: black 0.1em 0.1em 0.2em;
		margin-left: 50px;
	}
	#mainSobre:link {
 		color: #9BF2EA;
	}


</style>