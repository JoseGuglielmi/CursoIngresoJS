/*Se pide ingresar una edad y un estado cicvil
	///////////////////a todos los mayores de edad, mostrar el mensaje "se responsable"
	///////////////////a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	///////////////////a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	///////////////////a los niños tambien informar "hagan la tarea" 
	///////////////////a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	///////////////////a los mayores de edad solteros, tambien informar "a vivir la vida"
	///////////////////a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	///////////////////a los divorciados informar tambien "a intentarlo nuevamente"
*/

//txtIdEdad

//Soltero
//Casado
//Divorciado

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada<13)
	{
		alert("Hagan la tarea");
		alert("Respeta a tus mayores");
	}
	else
	{
		if(edadIngresada>12 && edadIngresada<19) 
		{
			if(estadoCivilIngresado != "Soltero")
			{
				alert("Sos muy joven para no ser soltero");
			}	
		}
		else
		{
			if(edadIngresada>18)
			{
				alert("Se responsable");
				
				if(edadIngresada>18 && edadIngresada<60&&estadoCivilIngresado=="Soltero")
				{
					alert("A vivir la vida");
				}
				else
				{
					if(edadIngresada>18 && edadIngresada<60&&estadoCivilIngresado=="Casado")
					{
						alert("A disfrutar de la pareja");
					}
					else
					{
						if(edadIngresada>18 && edadIngresada<60&&estadoCivilIngresado=="Divorciado")
						{
							alert("A intentarlo de nuevamente");
						}
						else
						{
							if(edadIngresada>59)
							{
								alert("Sos persona de riesgo");
							}
						}
					}
				}
			}
			
		}
	}	





	/*
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada<18 && estadoCivilIngresado != "Soltero")
	{
		alert("Eres muy pequeño para NO ser soltero");
	}
	*/


}//FIN DE LA FUNCIÓN