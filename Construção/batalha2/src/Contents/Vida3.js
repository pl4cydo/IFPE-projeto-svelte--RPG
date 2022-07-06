import { writable } from 'svelte/store';

export let Estudante = writable({
	nome: "EstudanteIFPE",
	vida: 194,
	baseAcerto: 10, 
	ataque: 9,
	def: 15
});

export let Messiah = writable({
	nome: "MESSIAH",
	vidaCarlos: 194,
	baseAcerto: 12,  
	ataque: 12,
	def: 12
});

export let estadoTurno = writable(false);
 
