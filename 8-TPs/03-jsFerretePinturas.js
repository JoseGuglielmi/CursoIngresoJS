/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
//txtIdTemperatura

var temperatura;
var centígrados;
var Fahrenheit;

function FahrenheitCentigrados () 
{
   temperatura = txtIdTemperatura.value;
   temperatura = parseInt(temperatura);
    
   centígrados = (temperatura-32)*5/9;

   alert("Seria "+ centígrados +" grados centígrados");
}

function CentigradosFahrenheit () 
{
   temperatura = txtIdTemperatura.value;
   temperatura = parseInt(temperatura);

   Fahrenheit = (temperatura*9/5)+32;

  alert("Seria "+ Fahrenheit +" grados Fahrenheit");
}
