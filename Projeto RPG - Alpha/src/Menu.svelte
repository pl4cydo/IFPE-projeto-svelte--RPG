<script type="text/javascript">
	import { estado } from './Contents/Estado.js'
	import { trocarEstadoDoJogo } from './Contents/Estado.js'

	document.onkeydown = function(event) {
    	if (event.keyCode == (75)) {
       		hiddeDev()
        }
    }
    function hiddeDev() {
    	trocarDevson() 
    	if (devson == true) {
    		devDiv.style.visibility = "visible"
    	} else if (devson == false) {
    		devDiv.style.visibility = "hidden"
    	}
    }
    let devson = false;
    function trocarDevson() {
    	if (devson == true) {
    		devson = false
    	} else {
    		devson = true
    	}
    }
</script>

<link rel="stylesheet" type="text/css" href="./styles/menu.css">
<main>
	<div class="container">
		<div class="bloco">
			<div class="titulo">
				<h1>FINAL<br>IFPE</h1>
				<h3>Uma Jornada Esperada</h3>
			</div>
			<div class="jogar" on:click={() => trocarEstadoDoJogo('jogar')}>
				<h1>JOGAR</h1>
			</div>
			<div class="ajuda" on:click={() => trocarEstadoDoJogo('ajuda')}>
				<h1>AJUDA</h1>
			</div>
			<div class="sobre" on:click={() => trocarEstadoDoJogo('sobre')}>
				<h1>SOBRE</h1>
			</div>
			<div class="projeto">
				<h1>Demo Week 2022.1</h1>
			</div>
			<div id="devDiv">
				<ul>
					<p>DEV MODE</p>
					<li class="listaDev" on:click={() => trocarEstadoDoJogo('jogar')}>MAPA-I</li>
					<li class="listaDev" on:click={() => trocarEstadoDoJogo('mapa2')}>MAPA-II</li>
					<li class="listaDev" on:click={() => trocarEstadoDoJogo('mapa3')}>MAPA-III</li>
				</ul>
        	</div>
		</div>
	</div>
</main>

<style>
	
</style>