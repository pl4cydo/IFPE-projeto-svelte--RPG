<script>
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

	</div>
</main>

<style type="text/css">
	#container {
		width: 100%;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#bloco {
		width: 762px;
		height: 566px;
		border: 1px solid;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	tr {
	border: 1px solid black;
	display: inline-flex;	
	}
	td {
	width: 50px;
	height: 50px;
	border: 1px solid black;
	position: absolute-inline;
	

	}
	.imgs {
		width: 56px;
		height: 56px;
		margin-top: -2px;
		margin-left: -2px;
		margin-bottom: 0px;
		position: absolute;
	}
	.imgs2 {
		width: 56px;
		height: 56px;
		margin-top: -2px;
		margin-left: -2px;
		margin-bottom: 0px;
		position: absolute;
		transform: scaleX(-1);
	}
	.imgs3 {
		width: 56px;
		height: 56px;
		margin-top: -2px;
		margin-left: -2px;
		margin-bottom: 0px;
		position: absolute;
		transform: rotate(90deg);
	}
	.imgs4 {
		width: 56px;
		height: 56px;
		margin-top: -2px;
		margin-left: -2px;
		margin-bottom: 0px;
		position: absolute;
		transform:rotate(-90deg);
	}

</style>