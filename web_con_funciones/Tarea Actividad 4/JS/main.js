/*==================================================
=            Seccion de la pagina index            =
==================================================*/

function saludoDeBienvenida(){
	var person = prompt("¿Cual es tu nombre?",  "");
	if(person != null)
	{
		document.getElementById("SaludoB").innerHTML = "Hola " + person + ", Empecemos con la guia!";
	}
}

/*=====  End of Seccion de la pagina index  ======*/

/*===============================================================
=            Seccion de la pagina: Sana_alimentacion            =
===============================================================*/

function desbloquearBoton() {
  document.getElementById("boton2").style.display = "inline";
  document.getElementById("boton1").style.display = "none";
}

function cambiarDescripcion() {
  document.getElementById("descripcion").innerHTML = "La malnutrición por exceso afecta a hombres y mujeres, pero con mayor\nintensidad a las mujeres; afecta también a los niños y niñas desde muy\npequeños incidiendo en su crecimiento y desarrollo; y afecta a todos los\ngrupos socioeconómicos, pero principalmente a los grupos\nsocioeconómicos más vulnerables.\nSi no tenemos una dieta balanceada y equilibrada, que contemple todas\nnuestras necesidades de nutrientes, vitaminas y fibras, entonces estamos\nhablando de una mala alimentación, la cual puede disminuir la respuesta del\nsistema inmunológico, alterar el desarrollo físico y mental e incrementar la\nvulnerabilidad a las enfermedades";
  document.getElementById("boton2").style.display = "none";
  document.getElementById("boton3").style.display= "inline";
}

/*=====  End of Seccion de la pagina: Sana_alimentacion  ======*/

/*===============================================================================
=            Seccion de la pagina: Pincipios de la alimentacion sana            =
===============================================================================*/

function cambiarTexto() {
    var elementosP = document.getElementsByTagName("p");
    elementosP[3].innerHTML = "Se recomienda lo siguiente";
}

/*=====  End of Seccion de la pagina: Pincipios de la alimentacion sana  ======*/

/*==================================================================================
=            Secccion de la pagina: Lista de imagenes alimentacion sana            =
==================================================================================*/

//Esta funcion corresponde al arreglo de imagenes
let ArregloIMG = ["../MEDIA/IMG/ImagenArreglo1.jpg", "../MEDIA/IMG/ImagenArreglo2.jpg", "../MEDIA/IMG/ImagenArreglo3.jpg", "../MEDIA/IMG/ImagenArreglo4.jpg", "../MEDIA/IMG/ImagenArreglo5.jpg", "../MEDIA/IMG/ImagenArreglo6.jpg", "../MEDIA/IMG/ImagenArreglo7.jpg", "../MEDIA/IMG/ImagenArreglo8.jpg"];
function showArray() {
    let resultado = "";
    for (let i = 0; i < ArregloIMG.length; i++) {
      resultado +=  `<img src="${ArregloIMG[i]}" alt="Imagen ${i+1}">`;
    }
    document.getElementById("resultado").innerHTML = resultado;
}

//cambia la img
function changeElementOfArray() {
    ArregloIMG[4] = "../MEDIA/IMG/ImagenArreglo9.jpg";
    document.getElementById("resultado").innerHTML = ArregloIMG;
}

/*=====  End of Secccion de la pagina: Lista de imagenes alimentacion sana  ======*/