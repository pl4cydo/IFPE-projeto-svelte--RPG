<script type="text/javascript">
	
	// var canvas = document.querySelector('#canvas');
	// var context = canvas.getContext('2d');

	// var xPos = 0;
	// var yPos = 0;

	// canvas.react(xPos, yPos, 50, 50)
	
</script>

<main>
	<div class="container">
		<img src="./images/backgound.png" class="fundo">
		<canvas id="canvas" height="300" width="1000"></canvas>
		<img class="castelo" src="./images/castelo.png">
		<img class="player" src="./images/player.png">
	</div>
</main>

<style type="text/css">
	.container {
		width: 100%;
		height: 100hv;
		display: flex;
		justify-content: center;
		margin-top: 300px;
	}
	.fundo {
		height: 300px;
		width: 1000px;
		position: relative;
	}
	#canvas {
		outline: 1px solid #000;
		position: absolute;
	}
	.castelo {
		margin-top: 180px;
		position: absolute;
		width: 100px;
		height: 100px;
	}
	.player {
		margin-top: 180px;
		margin-left: -900px;
		position: absolute;
		width: 100px;
		height: 100px;
	}
</style>