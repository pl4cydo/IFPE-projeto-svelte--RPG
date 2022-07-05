import { writable } from 'svelte/store';

export let Bus = writable({
	nome: "Igarassu Circular (Botafogo)",
	vidabus: 194,
	baseAcerto: 10,
	ataque: 10,
	def: 10
});

export let Estudante = writable({
	nome: "EstudanteIFPE",
	vida: 194,
	baseAcerto: 7, 
	ataque: 5,
	def: 15
});

export let estadoTurno = writable(false);
 
