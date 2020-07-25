function mostrar()
{
	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * 10) + 1;

	if(numeroRandom>8 && numeroRandom<11)
	{
		alert("EXCELENTE");
	}
	else
	{
		if(numeroRandom>3 && numeroRandom <9)
		{
			alert("APROBO");
		}
		else
		{
			if(numeroRandom<4)
			{
				alert("Vamos, la proxima se puede");
			}
		}
	}
}//FIN DE LA FUNCIÓN