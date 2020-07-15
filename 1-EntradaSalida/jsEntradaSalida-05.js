/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	//declaro varible
   var nombreId;
   var edadId;
   //doy el valor ingresado por id la variable
   nombreId = txtIdNombre.value;
   edadId = txtIdEdad.value;
   //muestro un mensaje con los datos ingresadospor id
   alert("Su nombre es "+ nombreId+ " y tiene"+ edadId + " años");
}

