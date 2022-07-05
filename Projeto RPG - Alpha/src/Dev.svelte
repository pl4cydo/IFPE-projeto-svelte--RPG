<script type="text/javascript">
	document.onkeydown = function(event) {
    	if (event.keyCode == (81)) {
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


<div id="devDiv">
		<ul>
			<p class="listaDev">DEV MODE</p>
			<li class="listaDev">MENU</li>
			<li class="listaDev">MAPA-I</li>
			<li class="listaDev">BATALHA-I</li>
			<li class="listaDev">MAPA-II</li>
			<li class="listaDev">BATALHA-II</li>
			<li class="listaDev">MAPA-III</li>
			<li class="listaDev">BATALHA-III</li>
		</ul>
</div>


<style type="text/css">
	#devDiv {
		position: absolute;
		height: 450px;
		width: 200px;
		border: 1px solid black;
		top: 190px;
		left: 1500px;
		visibility: visible;
	}
	.listaDev {
		margin: 30px;
		margin-left: 0;
	}
	.listaDev:hover {
		color: red;
	}
</style>