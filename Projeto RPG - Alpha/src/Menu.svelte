<script type="text/javascript">
	import { estado } from './Contents/Estado.js'
	import { trocarEstadoDoJogo } from './Contents/Estado.js'

	document.onkeydown = function(event) {
    	if (event.keyCode == (75)) {
       		hiddeDev()
       		audio.pause();
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
    let audioboo = true
    var audio = new Audio('./music/musicMenu.mp3');
    audio.play()

	function iniciarParando() {
		trocarEstadoDoJogo('jogar');
		audio.pause();
	}
	function ajudaPause() {
		trocarEstadoDoJogo('ajuda');
		audio.pause();
	}
	function sobrePause() {
		trocarEstadoDoJogo('sobre');
		audio.pause();
	}
</script>

<link rel="stylesheet" type="text/css" href="./styles/menu.css">
<main>
	<div class="container">
		<div class="bloco">
			<div class="titulo">
				<h1 class="t1">FINAL</h1>
				<h1 class="t2">IFPE</h1>
				<br>
				<h3>UMA JORNADA ESPERADA</h3>
			</div>
			<div class="jogar" on:click={() => iniciarParando()}>
				<h1>JOGAR</h1>
			</div>
			<div class="ajuda" on:click={() => ajudaPause()}>
				<h1>AJUDA</h1>
			</div>
			<div class="sobre" on:click={() => sobrePause()}>
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