<script>
import { estado } from './Contents/Estado.js'
import { trocarEstadoDoJogo } from './Contents/Estado.js'

var audioMap2 = new Audio('./music/mapa2.mp3');
audioMap2.play();

document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:
            // alert('Left key pressed');
            if (eixoX != 57) {
            	paraEsquerda()
            }
          break;
       case 38:
            // alert('Up key pressed');
            if (eixoY != 172) {
            	paraCima()
            }
          break;
       case 39:
            // alert('Right key pressed');
            if (eixoX != 327) {
            	paraDireita()
            }
          break;
       case 40:
            // alert('Down key pressed');
            if (eixoY != 284) {
            	paraBaixo()	
            }
          break;
       case 32:
       		entrarBatalha1()
       	  break;
    }
};

    let eixoX = 111;
    let eixoY = 284;
 
	function paraCima() {
	    eixoY -= 56;
	    console.log(eixoY)
		movimento.style.top = eixoY + "px"
		maior()  
	}
	function paraBaixo() {
	    eixoY += 56;
	    console.log(eixoY)
		movimento.style.top = eixoY + "px"  
		maior()
	}
	function paraEsquerda() {
		eixoX -= 54;
	    	console.log(eixoX)
		movimento.style.left = eixoX + "px" 
		movimento.style.transform = "scaleX(-1)"
		maior()
	}
	function paraDireita() {
		eixoX += 54;
	    console.log(eixoX)
		movimento.style.left = eixoX + "px" 
		movimento.style.transform = "scaleX(1.0)"
		maior()
	}
	function entrarBatalha1() {
		if ((eixoY == 228 || eixoY == 284) && eixoX == 327) {
			// alert('enter')
			audioMap2.pause()
			trocarEstadoDoJogo('batalha2')
        }
	}

	function maior() {
		if ((eixoY == 228 || eixoY == 284) && eixoX == 327) {
			caminhao1.style.height = "140px"
			caminhao2.style.height = "150px"
		} else {
			caminhao1.style.height = "120px"
			caminhao2.style.height = "130px"
		}
	}


	let tabela = [
	[0,0,0,0,0,0,0,0,0,1,3,2,1,0],
	[0,0,0,0,0,0,0,0,0,1,3,2,1,0],
	[0,0,0,0,0,0,0,0,0,1,3,2,1,0],
	[0,1,1,1,1,1,1,1,1,1,3,2,1,0],
	[0,1,5,5,5,5,5,5,5,5,3,2,1,0],
	[0,1,3,4,4,4,4,4,4,4,4,2,1,0],
	[0,1,3,2,1,1,1,1,1,1,1,1,1,0],
	[0,1,3,2,1,0,0,0,0,0,0,0,0,0],
	[0,1,3,2,1,0,0,0,0,0,0,0,0,0],
	[0,1,3,2,1,0,0,0,0,0,0,0,0,0]
	]
	
</script>
<link rel="stylesheet" type="text/css" href="./styles/mapa2.css">

<main id="container">
	<div id="bloco">
		<table>
			{#each tabela as linha, i}
				<tr>
					{#each linha as a, j}
						<td>
						{#if a == 0 }
								<img class="imgs" src="./images/grama1.jpg" alt="grama">	
						{:else if a == 1}
								<img class="imgs" src="./images/floor.jpg" alt="floor">
						{:else if a == 2}
								<img class="imgs" src="./images/asphalt-rigth.jpg" alt="asphalt">
						{:else if a == 3}
								<img class="imgs2" src="./images/asphalt-rigth.jpg" alt="asphalt">
						{:else if a == 4}
								<img class="imgs3" src="./images/asphalt-rigth.jpg" alt="asphalt">
						{:else if a == 5}
								<img class="imgs4" src="./images/asphalt-rigth.jpg" alt="asphalt">		
						{/if} 
						</td>
					{/each}	
				</tr>	
			{/each}

		</table>
		<div id="blocoMapa">
			<img id="caminhao2" src="./images/caminhão2.0.png" alt="caminhão">
			<img id="caminhao1" src="./images/caminhão1.0.png" alt="caminhão">
			<!-- <img class="carro2" src="./images/carro2.png" alt="carro"> -->
			<div id="integracao">
				<img src="./images/integracao.png" alt="integracao">
				<p>Integração<br>de<br> Igarassu</p>
			</div>
			<img class="home" src="./images/home.png" alt="home">
			<div id="ifpe">
				<img src="./images/ifpe.png" alt="ifpe">
				<p>IFPE<br>Campus<br>Igarassu</p>
			</div>
			<div id="movimento">
				<img id="personagemMap" src="./images/player.png" alt="personagem">
			</div>
		</div>
	</div>
</main>

<style type="text/css">

</style>