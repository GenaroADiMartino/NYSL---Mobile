partidos = datos.matches;

function cambiarSeccion(nuevaSeccion){
	app.seccion = nuevaSeccion;
}

function filtrarPartidosFecha() {

	partidosSeptember = partidos.filter(partido => partido.month == "September");
	partidosOctober = partidos.filter(partido => partido.month == "October");
	partidosNovember = partidos.filter(partido => partido.month == "November");
	partidosDecember = partidos.filter(partido => partido.month == "December");

}

function filtrarEquipos() {

	equipo1 = partidos.filter(equipo => (equipo.team1 =="U1" || equipo.team2 =="U1"));
	equipo2 = partidos.filter(equipo => (equipo.team1 =="U2" || equipo.team2 =="U2"));
	equipo3 = partidos.filter(equipo => (equipo.team1 =="U3" || equipo.team2 =="U3"));
	equipo4 = partidos.filter(equipo => (equipo.team1 =="U4" || equipo.team2 =="U4"));
	equipo5 = partidos.filter(equipo => (equipo.team1 =="U5" || equipo.team2 =="U5"));
	equipo6 = partidos.filter(equipo => (equipo.team1 =="U6" || equipo.team2 =="U6"));
}


filtrarPartidosFecha();
filtrarEquipos();

var app = new Vue({
	el: '#app',
	data: {
		seccion: "UE",
		pSeptember: partidosSeptember,
		pOctober: partidosOctober,
		pNovember: partidosNovember,
		pDecember: partidosDecember,
		tEquipo1: equipo1,
		tEquipo2: equipo2,
		tEquipo3: equipo3,
		tEquipo4: equipo4,
		tEquipo5: equipo5,
		tEquipo6: equipo6
	}
})

