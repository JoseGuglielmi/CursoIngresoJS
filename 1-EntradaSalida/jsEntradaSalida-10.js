/*
Jose Guglielmi
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/

function mostrarAumento()
{

	// txtIdImporte
	// txtIdResultado

    //declaro variables
	var importe;
	var descuento;
	var resultado;
	var datoUsuario;

    //uso el valor que introducen por id, y de texto lo paso a numerico
	importe = prompt("Ingrese el importe");
	importe = parseInt(importe);
 
    //pido datos al suario
	datoUsuario = prompt("Ingrese el descuento");
	datoUsuario = parseInt(datoUsuario);

    //calculo el descuento
    descuento = (importe*datoUsuario)/100;
    
    resultado = importe - descuento;

    //muestro el resultado por id
    //txtIdResultado.value = resultado;  

    //muestro resultado por alert.  
    alert("El importe es de $"+importe+" y el descuento es de $"+descuento+" y el total seria de $"+resultado);
}


