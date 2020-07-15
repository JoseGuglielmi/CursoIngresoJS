/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	//declaro variable
	var nombreIngresado;
    //doy o cargo 
	//nombreIngresado=txtIdNombre.value;
    nombreIngresado = document.getElementById('txtIdNombre').value;
    //llamo variable
	alert(nombreIngresado);

}


