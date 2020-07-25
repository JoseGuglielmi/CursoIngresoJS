/*
Jose Guglielmi
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	// txtIdSueldo
	// txtIdResultado

    //declaro variables
	var sueldo;
	var aumento;
	var resultado;
	var datoUsuario;

    //uso el valor que introducen por id, y de texto lo paso a numerico
	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	datoUsuario = promp("ingrese el descuento");
	datoUsuario = parseInt(datoUsuario);

    //calculo el aumento
    aumento = (sueldo*datoUsuario)/100;
    resultado = sueldo + aumento;

    //muestro el resultado por id
    txtIdResultado.value = resultado;    
}

