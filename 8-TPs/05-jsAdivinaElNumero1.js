/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/

var numeroSecreto; 
var contadorIntentos = 0;
var datoIngresado;
var falto;
var pasado;

function comenzar()
{
datoIngresado = txtIdNumero.value;
datoIngresado = parseInt(datoIngresado);

  numeroSecreto = numeroRandom = Math.floor(Math.random() *3)+1;

  falto = numeroSecreto - datoIngresado;
  pasado = datoIngresado - numeroSecreto;

  if(datoIngresado == numeroSecreto)
  {
    alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
  }
  else
  {
      if(datoIngresado>numeroSecreto)
      {        
        alert("Lastima te pasaste " + pasado);
        contadorIntentos = contadorIntentos +1;
        txtIdIntentos.value = contadorIntentos;
      }
        else
        {
          alert("Lastima te falto " + falto);
          contadorIntentos = contadorIntentos + 1;
          txtIdIntentos.value = contadorIntentos;
        }   
  }
}
function verificar()
{ 
  switch(numeroSecreto)
  {
    case 1:
      if(datoIngresado == numeroSecreto)
      {
        alert("Usted es un ganador!!! y en solo " + contadorIntentos + " intentos");
      }
    case 2:
      if(datoIngresado>numeroSecreto)
      {
        alert("Lastima te pasaste "+pasado);
        contadorIntentos = contadorIntentos + 1;
        txtIdIntentos.value = contadorIntentos;
      }  
      else
      {
        alert("Lastima te falto " + falto);
        contadorIntentos = contadorIntentos + 1;
        txtIdIntentos.value = contadorIntentos;
      }
  }
}