<script>

	export let Texto = ''

	function comecar() {
		bottonRow1.innerHTML = "<p>Hora de dar um quebra! Cuidado!<br> Ele pode cortar sua verba!</p>"
		bottonRow2.style.visibility = "visible"
		hpp1.style.visibility = "visible"
		hpbs.style.visibility = "visible"
	}
</script>

<button class="Botao" on:click={() => comecar()} >
	{Texto}
</button>

<style>
	.Botao{
	width: 150px;
	margin-left: 80px;
	background-color: #A9A9A9;
	border: 2px solid;
	border-color: black;
	border-radius: 3px;
	font-weight:bold;
	}

	.Botao:hover {
	background-color: black;
    color: white;
	}

</style>