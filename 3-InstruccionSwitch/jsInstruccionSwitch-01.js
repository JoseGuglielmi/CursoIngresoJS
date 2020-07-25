function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch(mesDelAño)
	{
		case "Enero":
		case "Febrero":
			alert("que comiences bien el año!!!.");
			break;
		case "Marzo":	   
		case "Abril":	   
		case "Mayo":
		case "Junio":	
			alert("A clases!!!");
			break;
		case "Julio":
		case "Agosto":
		case "Septiembre":
		case "Octubre":
		case "Noviembre":
			alert("se vienen las vacaciones!!!.");
			break;
		case "Diciembre":
			alert("Felices fiesta!!!.");
			break;	   
	}


}//FIN DE LA FUNCIÓN
