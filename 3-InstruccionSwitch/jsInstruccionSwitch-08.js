function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Hace frio");
			break;
		case "Cataratas":
			alert("hace Calor");
			break;
		case "Mar del plata":
			alert("hace calor");
			break;
		case "Cordoba":
			alert("Hace frio");
			break;
	}

}//FIN DE LA FUNCIÓN