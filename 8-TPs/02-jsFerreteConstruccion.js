/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
   var ancho;
   var largo;
   var perimetro;
   var alambre;

   largo = txtIdLargo.value;
   largo = parseInt(largo);

   ancho = txtIdAncho.value;
   ancho = parseInt(ancho);

   perimetro = (ancho + largo)*2;

   alambre = perimetro*3;

   alert("la cantidad de alambre a comprar es de "+ alambre +" metros");
}
function Circulo () 
{
    var radio;
    var perimetro;
    var alambre;
    const PI = 3.14;

    radio = txtIdRadio.value;
    radio = parseInt(radio);

    perimetro = 2 * PI * radio;
    
    alambre = perimetro * 3;

    alert("La cantidad dde almbre a comprar es de "+ alambre + " metros");

}
function Materiales () 
{
    var bolsaDeCemento;
    var cal;
    var largo;
    var ancho;

    largo = txtIdLargo.value;
    largo = parseInt(largo);

    ancho = txtIdAncho.value;
    ancho = parseInt(ancho);

    bolsaDeCemento = (largo + ancho)*2;

    cal = (largo + ancho)*3;

    alert("Se nesecita "+bolsaDeCemento+" bolsas de cemento y "+cal+" bolsas de cal");
}