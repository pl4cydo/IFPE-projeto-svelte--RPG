<script>
import { estado } from './Contents/Estado.js'
import { trocarEstadoDoJogo } from './Contents/Estado.js'

document.onkeydown = function(event) {
    switch (event.keyCode) {
       case 37:
            // alert('Left key pressed');
            if (eixoX != 953) {
            	paraEsquerda()
            }
          break;
       case 38:
            // alert('Up key pressed');
            if (eixoY != 371) {
            	paraCima()
            }
          break;
       case 39:
            // alert('Right key pressed');
            if (eixoX != 791) {
            	paraDireita()
            }
          break;
       case 40:
            // alert('Down key pressed');
            if (eixoY != 539) {
            	paraBaixo()	
            }
          break;
       case 13:
       		entrarBatalha1()
       	  break;
    }
};

    let eixoX = 791;
    let eixoY = 539;
 
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
		eixoX += 54;
	    console.log(eixoX)
		movimento.style.right = eixoX + "px" 
		movimento.style.transform = "scaleX(-1)"
		maior()
	}
	function paraDireita() {
		eixoX -= 54;
	    console.log(eixoX)
		movimento.style.right = eixoX + "px" 
		movimento.style.transform = "scaleX(1.0)"
		maior()
	}
	function entrarBatalha1() {
		if (eixoY == 371 && (eixoX == 845 || eixoX == 899)) {
			// alert('enter')
			trocarEstadoDoJogo('batalha')
        }
	}

	function maior() {
		if (eixoY == 371 && (eixoX == 845 || eixoX == 899)) {
			integracao.style.height = "90px"
		} else {
			integracao.style.height = "70px"
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
<link rel="stylesheet" type="text/css" href="./styles/mapa.css">

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
								<img class="imgs" src="./images/floor.jpg">
						{:else if a == 2}
								<img class="imgs" src="./images/asphalt-rigth.jpg">
						{:else if a == 3}
								<img class="imgs2" src="./images/asphalt-rigth.jpg">
						{:else if a == 4}
								<img class="imgs3" src="./images/asphalt-rigth.jpg">
						{:else if a == 5}
								<img class="imgs4" src="./images/asphalt-rigth.jpg">		
						{/if} 
						</td>
					{/each}	
				</tr>	
			{/each}

		</table>
		<img id="caminhao2" src="./images/caminhão2.png">
		<img id="caminhao1" src="./images/caminhão1.png">
		<div id="integracao">
			<img src="./images/integracao.png">
			<p>Integração<br>de<br> Igarassu</p>
		</div>
		<div id="movimento">
			<img id="personagemMap" src="./images/player.png">
		</div>
	</div>
</main>

<style type="text/css">

</style>