function llamar6(){

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

var numero = prompt("Introduce tu número de tu Indentificación (sin la letra)");// \u00f3 para la ó acentuada en UNICODE
var letra = prompt("Introduce la letra de tu Indentificación (en mayúsculas)"); // \u00fa para la ú acentuada en UNICODE
letra = letra.toUpperCase();

if(numero < 0 || numero > 99999999) {
  alert("El número proporcionado no es válido");
}
else {
  var letraCalculada = letras[numero % 23];
  if(letraCalculada != letra) {
    alert("La letra o el número proporcionados no son correctos");
  }
  else {
    alert("El número de tu Indentificación y su letra son correctos");
  }
}}