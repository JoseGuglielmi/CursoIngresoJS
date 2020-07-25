function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("este mes tiene 29 dias");
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("este mes tiene 30 dias");
			break;
	    default:
			alert("este mes tiene 31 dias");
			break;
	}
}//FIN DE LA FUNCIÓN