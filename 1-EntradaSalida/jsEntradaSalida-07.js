/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 

/*
txtIdNumeroUno
txtIdNumeroDos
*/

var numeroUn;
var numeroDos;

function sumar()
{	
	numeroUno = txtIdNumeroUno.value;
    numeroUno= parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno+numeroDos;

	alert("El resultaldo de su suma es "+ resultado);

}

function restar()
{
	numeroUno = txtIdNumeroUno.value;
    numeroUno= parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno-numeroDos;

	alert("E resultado de su resta es "+ resultado);

}

function multiplicar()
{ 
	numeroUno = txtIdNumeroUno.value;
    numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno*numeroDos;

	alert("El resultaldo de su multiplicacion es "+ resultado);
}

function dividir()
{
	numeroUno = txtIdNumeroUno.value;
    numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);

	resultado = numeroUno/numeroDos;

	alert("El resultaldo de su division es "+ resultado);

}

