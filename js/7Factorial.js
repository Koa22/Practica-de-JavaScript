function llamar7(){

var numero = prompt("Introduce un número y se mostrar su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}

document.getElementById('texto').innerHTML=resultado;

}

