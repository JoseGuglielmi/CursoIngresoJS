
function mostrar()
{
    var largo;
    var ancho;
    var perimetro;

    largo = prompt("Ingrese el largo");
    largo = parseInt(largo);

    ancho = prompt("Ingrese el ancho");
    ancho = parseInt(ancho);

    perimetro = (ancho+largo)*2;

    alert("El perimetro es de "+perimetro);

}
