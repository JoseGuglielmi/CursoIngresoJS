function mostrar()
{
	var destinoIngresado =txtIdDestino.value;
	alert(destinoIngresado);

	switch(destinoIngresado)
	{
		case "Bariloche":
			alert("Se encuentra al oeste de argentina");
			break;
		case "Cataratas":
			alert("Se encuentra al norte de argentina");
			break;
		case "Mar de plata":
			alert("Se encuentra al este de argentina");
			break;
		case "Cordoba":
			alert("Se encuentra al sur de argentina");
			break;		
	}

}//FIN DE LA FUNCIÓN