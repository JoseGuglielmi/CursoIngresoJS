/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	var numeroRandom;
	var numeroIngresado;

	numeroIngresado = prompt("Ingrese el numero");
	numeroIngresado = parseInt(numeroIngresado);
	numeroRandom = Math.floor(Math.random() * 3)+1;

	if(numeroIngresado == numeroRandom)
	{
		alert("muy bien 10, el numero random era "+numeroRandom);
	}
	else
	{
		alert("volve a intentarlo, dale no seas gordo, el numero era "+numeroRandom);
	}
}

