/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	/*
	txtIdNumeroUno
	txtIdNumeroDos
	*/
	
	//declaro variable
	var numeroUno;
	var numeroDos;
	
	//doy un valor por id y lo transformo a entero
	numeroUno = txtIdNumeroUno.value;
	numeroUno = parseInt(numeroUno);

	numeroDos = txtIdNumeroDos.value;
	numeroDos = parseInt(numeroDos);
	
	//sumo 
	resultado = numeroUno+numeroDos;
	
	//doy esultado por un alert
	alert("el resultado de su suma es "+ resultado);
    
}

