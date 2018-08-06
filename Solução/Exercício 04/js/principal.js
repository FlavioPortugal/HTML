var tabuada2 = document.querySelector("#tabuada2");
var tabuada4 = document.querySelector("#tabuada4");
var tabuada7 = document.querySelector("#tabuada7");
var tabuada10 = document.querySelector("#tabuada10");

for (var multiplo = 0; multiplo <= 10; multiplo++) {

	tabuada2.appendChild(montaTr(2, multiplo));
	tabuada4.appendChild(montaTr(4, multiplo));
	tabuada7.appendChild(montaTr(7, multiplo));
	tabuada10.appendChild(montaTr(10, multiplo));

}

function montaTr(numero, multiplo) {
	var tr = document.createElement("tr");
	
	var tdNro = document.createElement("td");
	var tdMultiplo = document.createElement("td");
	var tdResultado = document.createElement("td");

	tdNro.textContent = numero;
	tdMultiplo.textContent = multiplo;
	tdResultado.textContent = (numero * multiplo);

	tr.appendChild(tdNro);
	tr.appendChild(tdMultiplo);
	tr.appendChild(tdResultado);

	return tr;
}