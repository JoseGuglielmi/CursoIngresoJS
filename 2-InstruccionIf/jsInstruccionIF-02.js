//Guglielmi Jose Ejemplo 2
function mostrar()
{
	var datoIngresado;

	datoIngresado = txtIdEdad.value;
	datoIngresado = parseInt(datoIngresado);

	if(datoIngresado<18)
	{
		alert("Usted es menor de edad");
	}

	if(datoIngresado>17)
	{
		alert("Usted es de mayor de edad")
	}
	
	

}//FIN DE LA FUNCIÓN