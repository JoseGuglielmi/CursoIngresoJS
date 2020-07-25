/* Jose Guglielmi
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
   // txtIdPrecioUno
   // txtIdPrecioDos
   // txtIdPrecioTres

//declaro variables
var numeroUno;
var numerodos;
var numerotres;

var suma;
var promedio;
var iva;   
var precioFinal;

function Sumar () 
{
    //doy valor a la variable por medio del id y los convierto te texto a numero
	numeroUno = txtIdPrecioUno.value;
	numeroUno = parseInt(numeroUno); 

	numerodos = txtIdPrecioDos.value;
	numerodos = parseInt(numerodos);

	numerotres = txtIdPrecioTres.value;
	numerotres = parseInt(numerotres);
    
    //sumo los tres nnumeros ungresados por id
	suma = numeroUno + numerodos + numerotres;

    //mando una alert con el resultado
	alert("La suma de los tres productos es "+suma);
}
function Promedio () 
{
	//doy valor a la variable por medio del id y los convierto te texto a numero
	numeroUno = txtIdPrecioUno.value;
	numeroUno = parseInt(numeroUno); 

	numerodos = txtIdPrecioDos.value;
	numerodos = parseInt(numerodos);

	numerotres = txtIdPrecioTres.value;
	numerotres = parseInt(numerotres);
    
    //promedio los tres numeros ingresados por id
	promedio = (numeroUno + numerodos + numerotres)/3;


    //mando una alert con el resultado
	alert("El promedio de los tres productos es "+ promedio);
}
function PrecioFinal () 
{
	//doy valor a la variable por medio del id y los convierto de texto a numerico
	numeroUno = txtIdPrecioUno.value;
	numeroUno = parseInt(numeroUno); 

	numerodos = txtIdPrecioDos.value;
	numerodos = parseInt(numerodos);

	numerotres = txtIdPrecioTres.value;
	numerotres = parseInt(numerotres);

    //sumo los tres numeros igresados por id
	suma = (numeroUno + numerodos + numerotres);
    
    //calculo el iva
	iva = suma *21 /100;
    
    //agrego el iva al precion final
	precioFinal = suma + iva;

    //mando una alert con el precio final
	alert("El precio final de los tres productos mas el iva es de "+precioFinal);
}