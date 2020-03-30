
function palindromo(cadena) {

  var resultado = "La cadena \""+cadena+"\" \n";

  // Pasar a minusculas la cadena
  var cadenaOriginal = cadena.toLowerCase();

  // Convertir la cadena en un array
  var letrasEspacios = cadenaOriginal.split("");

  // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
  var cadenaSinEspacios = "";
  for(i in letrasEspacios)
    if(letrasEspacios[i] != " ")
          cadenaSinEspacios += letrasEspacios[i];

  var letras = cadenaSinEspacios.split("");
  var letrasReves = cadenaSinEspacios.split("").reverse();

  // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
  var iguales = true;
  for(i in letras)
    if(letras[i] != letrasReves[i])
         iguales = false;


  if(iguales)
    document.getElementById("aqui1").innerHTML=(resultado += " es un palíndromo");
  else
    document.getElementById("aqui2").innerHTML=(resultado += " no es un palíndromo");


}

//document.getElementById("aqui1").innerHTML=(palindromo("La ruta nos aporto otro paso natural"));
//document.getElementById("aqui2").innerHTML=(palindromo("Esta frase no se parece a ningun palindromo"));
function llamar10(){
palindromo("La ruta nos aporto otro paso natural");
palindromo("Esta frase no se parece a ningun palindromo");
}

