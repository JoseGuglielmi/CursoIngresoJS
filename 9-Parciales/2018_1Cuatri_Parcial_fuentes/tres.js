function mostrar()
{
  var datoUsuarioPrecio;
  var datoUsuarioDescuento;
  var calculoDescuento;
  var precioFinal;

  datoUsuarioPrecio = prompt("Ingrese el precio y le damos el precio final mas el descuento");
  datoUsuarioPrecio = parseInt(datoUsuarioPrecio);

  datoUsuarioDescuento = prompt("Ingrece el descuento");
  datoUsuarioDescuento = parseInt(datoUsuarioDescuento);

  calculoDescuento = (datoUsuarioPrecio*datoUsuarioDescuento)/100;

  precioFinal = datoUsuarioPrecio-calculoDescuento;

  elPrecioFinal.value = precioFinal;
}
