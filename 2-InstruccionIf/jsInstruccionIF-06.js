/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años)
*/

function mostrar()
{
	var edadIngresada;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada<13)
	{
		alert("Usted es un niño");
	}
	else
	{
		if(edadIngresada<18)
		{
			alert("Ustede es adolescente");
		}
		else
		{
			alert("Usted es mayor de edad");
		}
	}
}//FIN DE LA FUNCIÓN
					