<script type="text/javascript">
	import { trocarEstadoDoJogo } from './Contents/Estado.js'
</script>

<div class="container">
	<div class="bloco">
		<main id="mainSobre">
			<h2>INFORMAÇÕES SOBRE O JOGO</h2>
			<h3>DESENVOLVEDORES</h3>
			<p>
					   Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Plácydo Lima
				<br /> Residencia: Camaragibe-PE
				<br />
				<a href="https://www.linkedin.com/in/pl%C3%A1cydo-lima-49a179223/" target="_blank">LinkedIn</a> @plácydo-lima
				<br /> <a href="https://github.com/pl4cydo" target="_blank">GitHub</a> @pl4cydo
			</p>

			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Daniel Filipe
				<br /> Residencia: Igarassu-PE
			</p>
			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Geneton Neto
				<br /> Residencia: Paulista-PE
				<br />
				<a href="https://www.linkedin.com/in/geneton-neto/" target="_blank">LinkedIn</a> @geneton-neto
				<br /> <a href="https://github.com/genetonneto" target="_blank">GitHub</a> @genetonneto
			</p>

			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Breno Rafael
				<br /> Residencia: Igarassua-PE
			</p>
			<p>
				<br /> Estudande de Informática para Internet - IFPE Igarassu-PE
				<br /> Nome: Marlon Mateus
				<br /> Residencia: Igarassua-PE
				<br /> <a href="https://github.com/Marlon99bit" target="_blank">GitHub</a> @Marlon99bit
			</p>
		</main>
		<div class='voltar' on:click={() => trocarEstadoDoJogo('menu')}>
			Voltar ao menu
		</div>
		<div id="referencias">
			<h2>LINKS USADOS COMO INSPIRAÇÕES E REFERÊNCIAS</h2>
			<p>Canal Scott Blenkhorne: Making a Battle Game with HTML/JS/CSS </p> <a href="https://www.youtube.com/watch?v=sr8bJKSUYwE" target="_blank">link</a><br>
			<br>
			<p>Canal ITVDN: Пишем пошаговую боевую систему на JavaScript с нуля. На примере игры Final Fantasy в 2D.</p> <a href="https://www.youtube.com/watch?v=5emyO5Nb1OU&list=PLAnQWjhxcCMA3wZVc3v7f908-rVLJLyO1&index=1" target="_blank">link</a><br>
			<br>
			<p>Canal CodeSpeedy: Detect Arrow Key Pressed in JavaScript with onkeydown and keyCode</p><a href="https://www.youtube.com/watch?v=4u7EnLWSUg0&list=PLAnQWjhxcCMA3wZVc3v7f908-rVLJLyO1&index=6" target="_blank">link</a><br>
			<h2>TRILHA SONORA</h2>
			<p>Pokémon Red & Blue(1986)</p>
			<h2>Agradecimentos especias:</h2>
			<p>Daniele Sarra - Pela ajuda e compreensão.</p> <br>
			<p>Anthony Richard - Pelo companheirismo e ideias.</p>
			
		</div>
	</div>
</div>


<style type="text/css">
	.container {
		width: 100%;
		height: 100vh;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: absolute;
	}
	.bloco {
		margin: 0;
		padding: 0;
		width: 900px;
		height: 600px;
		border: 5px solid;
		border-radius: 7px;
		border-color: white;
		box-shadow:  3px 3px grey;
		display: flex;
	}
	#mainSobre a {
		text-shadow: white 0.1em 0.1em 0.2em;
		color: darkblue;
	}
	#mainSobre {
		margin-top: -5px;
		color: snow;
		font: 10pt message-box;
		text-shadow: black 0.1em 0.1em 0.2em;
		margin-left: 30px;
	}

	#mainSobre p {
 		font-size: 13pt;
 		margin: 0;
 		/*margin-top: -10px;*/
 		margin-bottom: -5px;
	}
	.voltar {
		position: absolute;
		padding: 0;
		margin-top: 550px;
		margin-left: 750px;
		width: 300px;
		height: 50px;
		justify-content: center;
		align-items: center;
		text-shadow: black 0.1em 0.1em 0.2em;
		color: snow;
	}
	#referencias {
		height: 500px;
		width: 300px;
		/*border: 1px solid black;*/
		margin-top: 15px;
		margin-left: 20px;
		color: snow;
		font: 10pt message-box;
		text-shadow: black 0.1em 0.1em 0.2em;
		justify-content: center;
	}
	#referencias a {
		padding: 0;
		color: darkblue;
		text-shadow: white 0.1em 0.1em 0.2em;
		text-align: justify-all;
		margin-left: 17px;
		margin-top: 27px;
		position: absolute;
	}
	#referencias h2 {
		margin-top: 30px;
		margin-left: 15px;
		margin-bottom: -10px;
	}
	#referencias p {
		font-size: 11pt;
		margin-bottom: -25px;
		margin-left: 15px;
	}

</style>