//Script del programador para arreglo de funciones y realizacion de eventos

//Funcion que realiza un acomodo en texto
document.addEventListener("DOMContentLoaded", function(e) {

	const parrafos = document.querySelectorAll('.descripcion');

	//variables
	let alturas = []; //alturas para meter todos los que tenga y pueda aplicar ese y que todos tengan el mismo tamaño para acomodar
	let alturaMaxima = 0;

	const aplicarAlturas = (function aplicarAlturas(){

		parrafos.forEach(parrafo => {

			if(alturaMaxima == 0){
				alturas.push(parrafo.clientHeigth)
			} else {
				parrafo.Style.height = alturaMaxima + "px";
			}

		});

		return aplicarAlturas;
	})();
	
	alturaMaxima = Math.max.apply(Math, alturas);
	aplicarAlturas();
});

//contenido de botones en la imagen
function splatoon() {
	document.getElementById("game1").innerHTML="Juego que se desarrolla en un mundo " + 
	"habitado por criaturas humanoides, los Inkling, capaces de transformarse en calamares y " + 
	"disparar tinta. Los usuarios forman equipos de cuatro y deben combatir juntos para vencer a " + 
	"sus rivales sobre el escenario.";
	document.getElementById("boton1").style.display = 'inline-block';
	document.getElementById("botonn1").style.display = 'none';
}

function trheeHouses() {
	document.getElementById("game2").innerHTML="Segundo juego que se desarrolla en cromopolis" + 
	" donde los octarianos, enemigos de los Inklingquieren probar el mundo soñado, se enbarcan en una" +
	" aventura dentro de un gran bagon en camino al mundo soñado...";
	document.getElementById("boton2").style.display = 'inline-block';
	document.getElementById("botonn2").style.display = 'none';
}

function canelita() {
	document.getElementById("game3").innerHTML="Tercera entrega que se desarrolla enn el mundo lleno de caos " + 
	"con las nuevas animadoras buscan el porque existe un crater tan extraño y van en busqueda del conocmiento. " + 
	"enterandose del nuevo mal que habita en ese inospito crater que puede convertir a los inklings a una version " + 
	"furrificada. buscando el porque, se enbarcan al crater.";
	document.getElementById("boton3").style.display = 'inline-block';
	document.getElementById("botonn3").style.display = 'none';
}

//Funcion para ocultar los botones
function ocultar1(id){
	document.getElementById(id).innerHTML = '';
	document.getElementById("boton1").style.display = 'none';
	document.getElementById("botonn1").style.display = 'inline-block';
}

function ocultar2(id){
	document.getElementById(id).innerHTML = '';
	document.getElementById("boton2").style.display = 'none';
	document.getElementById("botonn2").style.display = 'inline-block';
}

function ocultar3(id){
	document.getElementById(id).innerHTML = '';
	document.getElementById("boton3").style.display = 'none';
	document.getElementById("botonn3").style.display = 'inline-block';
}

/*
En la lista hace un cabio de texto dependiendo la lista que se halle y se mostrara el texto 
correspondiente de la lista de contenidos.
usando una lista esta opcion crea la facilidad de cambio de texto
*/
function switchList(page){
    var current = document.getElementsByClassName("lis-active").item(0);
    var newPage = 0;
    console.log(current.dataset.page + ", " + page)
    let size = document.getElementsByClassName("inactive").length;
    if(parseInt(current.dataset.page) === parseInt(page)) return;
    for (let i = 0; i < size; i++) {
        if(parseInt(document.getElementsByClassName("inactive").item(i).dataset.page)  === parseInt(page)){
            newPage = document.getElementsByClassName("inactive").item(i);
            break;
        }
    }
    newPage.className = "lis-active";
    current.className = "inactive"
    console.log(newPage)

    let switcherP = document.getElementById("switcher");
    let switcherImg = document.getElementById("switcherImg");
    switch (page){
        case 1:
            switcherP.innerHTML = "El modo de juego \"Territorial\" El modo de juego Territorial es donde peleas por pintar mas el mapa que el equipo contrario, buscando el dominio mayoritario del terreno en un lapso de tiempo de 3 minutos. <br> Entintando mas que el rival e impidiendo que este pinte reventando al contrincante y de esa manera ir pintando mas. <br> Usando armas como rociadores, rodillos, duales, cargatintas y otras mas buscando como entintar mas y prevenir que los demas entinten. <br>"
            switcherImg.src = "../MEDIA/IMG/territorial.jpg"
            break;
        case 2:
            switcherP.innerHTML = "El modo de juego \"Asalto almeja\" En asalto almeja recolectas almejas escondidas en el territorio y cuando consigues 10 estas, se convertiran en un balon de futboll americano <br> Con este balon iras a arremeter a la membrana del equipo contrario con el fin de romperla y ahi es cuando el equipo tiene que tirar almejas a la membrana abierta, entre mas metan, mas oportunidades tienen de ganar <br> El duelo concluye cuando un contricante es llenado de almejas o pierde en cuestion de puntos en menos de un cierto periodo de tiempo corto"
            switcherImg.src = "../MEDIA/IMG/asaltoAlmeja.jpg"
            break;
        case 3:
            switcherP.innerHTML = "El modo de juego \"Torreon\" El modo de juego Tprreon es que subes a un torreon y lo tienes que proteger, subido a el tienes que avanzar entre las lineas enemigas <br> Portegiendo la el torreon de invasores reventandolos y previniendo que se acercen demaciado a tu casa <br> En este, como en los otros solo tienes 3 minutos para liberar una intensa batalla con el fin de tener el control total <br> En busqueda de la meta deberas arrasar a todos los perpetradores y asi tener el torreon en casa enemiga"
            switcherImg.src = "../MEDIA/IMG/torreon.jpg"
            break;
        case 4:
            switcherP.innerHTML = "El modo de juego \"Pinta zona\" El modo de juego pintazona es ir y pintar una zona en especifico generando puntos y asi ganar <br> Poder reventar a todos los que amenacen el control de la zona y poder reiterar tu control sobre una zona que pintar reventando a cualquier invasor <br> usando metodos necesarios para proteger una zona en especifico asi en 3 minutos de intensa batalla de inicio a fin conseguir el control sobre la zona a pintar."
            switcherImg.src = "../MEDIA/IMG/PZ.jpg"
            break;
        case 5:
            switcherP.innerHTML = "El modo de juego \"Salmon run\" El modo de juego de salmón run trata de que una extraña grabadora en forma de oso llamado Don Oso necesita trabajadores para recolectar un peculiar manjar que son los huevos de salmón <br> Tomas el trabajo por el dinero y buscas de esa manera poder cosechar una buena cantidad de salmónidos para que puedan pagarte de una manera grata <br> Los salmónidos dan huevecillos y los grandes salmónidos dan huevos mas grandes aunque son mas difícil de reventa <br> llevas los acabo la recolección de huevos y la llevas a la nasa pesquera donde Don oso los recoge y hace negocios con este"
            switcherImg.src = "../MEDIA/IMG/salmon god.jpg"
            break;
    }
}