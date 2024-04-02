const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', function(e) {
	const x = e.pageX - btn.offsetLeft;
	const y = e.pageY - btn.offsetTop;

	const botonlleno = document.querySelector('.llenado-btn');
	botonlleno.Style.top = y + 'px';
	botonlleno.Style.left = x + 'px';
} )

function convertir() {
    let fahrenheit = prompt("Ingrese la temperatura en Fahrenheit", "");
    if (fahrenheit != null && fahrenheit != "") {
        let celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
        document.getElementById("mostrar").innerHTML = `${fahrenheit} Fahrenheit = ${celsius} Celsius.`;
    }
}
