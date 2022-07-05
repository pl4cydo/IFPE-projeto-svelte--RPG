import { writable } from 'svelte/store';

export let Estudante = writable({
	nome: "EstudanteIFPE",
	vida: 194,
	baseAcerto: 9, 
	ataque: 8,
	def: 15
});

export let Caminhoneiro = writable({
	nome: "Caminhoneiro Carlos",
	vidaCarlos: 194,
	baseAcerto: 11,  
	ataque: 11,
	def: 11
});

export let estadoTurno = writable(false);
 
