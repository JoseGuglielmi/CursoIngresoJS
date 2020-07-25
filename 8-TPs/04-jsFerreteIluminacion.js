/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    var cantidadIngresada;
    var precio;
    var descuento;
    var porcentajeDeDescuento=0;
    var precioFinal;
    var inpuestos;
    var marcaIngresada;
    
    cantidadIngresada = txtIdCantidad.value;
    cantidadIngresada = parseInt(cantidadIngresada);

    precio = cantidadIngresada*35;

    marcaIngresada = Marca.value;



    if(cantidadIngresada>6)
    {
        porcentajeDeDescuento = 50;
    }
    else
    {
        if(cantidadIngresada == 5 && marcaIngresada == "ArgentinaLuz")
        {
            porcentajeDeDescuento = 40;
        }
        else
        {
            porcentajeDeDescuento = 30;

            if(cantidadIngresada == 4 && marcaIngresada == "ArgentinaLuz" || marcaIngresada =="FelipeLamparas")
            {
                porcentajeDeDescuento = 25;
            }
            else
            {
                porcentajeDeDescuento = 20;

                if(cantidadIngresada == 3 && marcaIngresada == "ArgentinaLuz")
                {
                    porcentajeDeDescuento = 15;
                }
                else
                {
                    if(cantidadIngresada == 3 && marcaIngresada =="FelipeLamparas")
                    {
                        porcentajeDeDescuento = 10;
                    }
                    else
                    {
                        porcentajeDeDescuento = 5;

                        if(cantidadIngresada<3)
                        {
                            txtIdprecioDescuento.value = precio;
                        }
                    }
                }
            }
        }
    }

    descuento = precio*porcentajeDeDescuento/100;
    precioFinal = precio-descuento;
    txtIdprecioDescuento.value=precioFinal;



} 
