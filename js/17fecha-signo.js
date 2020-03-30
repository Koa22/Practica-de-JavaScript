function validaFechaMenor(campo){

        var bRet = false;
        var dHoy = new Date();
        var dCapt = null;
        if (campo.value == "")
          alert("Faltan datos");
        else{
          dCapt = validaFecha(campo.value);
          if (dCapt != null && dCapt < dHoy)
            bRet = true;
          else
            alert("La fecha debe ser menor a la fecha actual");
        }
        return bRet;
      }

        function validaFecha(valor){

        		var dConvertida = null;
        		var sAnio = "";
        		var sMes = "";
        		var sDia = "";
        		var nAnio=0, nMes=0, nDia = 0;

        		if (valor.match(/^\d{4}\-\d{2}\-\d{2}$/)){
        			nDia = parseInt(valor.substring(8,10), 10);
        			nMes = parseInt(valor.substring(5,7), 10);
        			nAnio = parseInt(valor.substring(0,4), 10);

        			if (nDia <1 || nDia>31)
        				alert("El día no es válido")
        			else{
        				if (nMes <1 || nMes>12)
        					alert("El mes no es válido");
        				else{
        					if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
        						 nMes==8 || nMes==10 || nMes==12) && nDia > 31)
        						 alert("El mes tiene máximo 31 días");
        					else if ((nMes==4 || nMes==6 || nMes==9 ||
        								nMes==11) && nDia > 30)
        						 alert("El mes tiene máximo 30 días");
        					else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
        						 alert("Febrero tiene 28 días o 29 en bisiesto");
        					else{
        						dConvertida = new Date();
        						dConvertida.setFullYear(nAnio, nMes-1, nDia);
        					}//fin validaci�n día-mes
        				}//mes válido
        			}//día válido
              creasigno(nDia,nMes);
        		}//formato válido

        		else{
        			alert("No tiene formato de fecha");
        		}
        		return dConvertida;
        }
        function creasigno(nDia,nMes){

        var newDiv = document.createElement("div");

        if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4)){
        var newContent = document.createTextNode("SIGNO ARIES Numero de las suerte: 240");  

                newDiv.appendChild(newContent); //añade texto al div creado.

                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="border: 3px solid #FD0000; background-color:#FD0000; width: 200px ;height:300px ";

        }else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5)){
          var newContent = document.createTextNode("SIGNO TAURO Numero de las suerte: 22");

               //var newContent = document.createTextNode("SIGNO");
               newDiv.appendChild(newContent); //añade texto al div creado.

                // añade el elemento creado y su contenido al DOM
               var currentDiv = document.getElementById("div");
               document.body.insertBefore(newDiv, currentDiv);
               newDiv.style="border: 3px solid #999999; background-color:#54b51e; width: 200px ;height:300px ";

          }else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6)){
            var newContent = document.createTextNode("SIGNO GEMINIS Numero de las suerte: 05");

                newDiv.appendChild(newContent); //añade texto al div creado.

                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="border: 3px solid #E9DE26; background-color:#E9DE26; width: 200px ;height:300px ";

           } else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7)){
              var newContent = document.createTextNode("SIGNO CANCER Numero de las suerte: 47");

                newDiv.appendChild(newContent); //añade texto al div creado.

                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="border: 3px solid #9E9595; background-color:#9E9595; width: 200px ;height:300px ";

              }else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8)){
                var newContent = document.createTextNode("SIGNO LEO Numero de las suerte: 56");

                newDiv.appendChild(newContent); //añade texto al div creado.

                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="border: 3px solid #FFB12A; background-color:#FFB12A; width: 200px ;height:300px ";

                }else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9)){
                  var newContent = document.createTextNode("SIGNO VIRGO Numero de las suerte: 229");

                newDiv.appendChild(newContent); //añade texto al div creado.

                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="border: 3px solid #458833; background-color:#458833; width: 200px ;height:300px ";

                  }else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10)){
                    var newContent = document.createTextNode("SIGNO LIBRA Numero de las suerte: 652");

                newDiv.appendChild(newContent); //añade texto al div creado.

                var currentDiv = document.getElementById("div");
                document.body.insertBefore(newDiv, currentDiv);
                newDiv.style="border: 3px solid #268FD9; background-color:#268FD9; width: 200px ;height:300px ";

                    }else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11)){
                      var newContent = document.createTextNode("SIGNO ESCORPIO Numero de las suerte: 52");

                      newDiv.appendChild(newContent); //añade texto al div creado.

                      var currentDiv = document.getElementById("div");
                      document.body.insertBefore(newDiv, currentDiv);
                      newDiv.style="border: 3px solid #E229A3; background-color:#E229A3; width: 200px ;height:300px ";

                     } else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12)){
                        var newContent = document.createTextNode("SIGNO SAGITARIO Numero de las suerte: 10");

                      newDiv.appendChild(newContent); //añade texto al div creado.

                      var currentDiv = document.getElementById("div");
                      document.body.insertBefore(newDiv, currentDiv);
                      newDiv.style="border: 3px solid #AE21F0; background-color:#AE21F0; width: 200px ;height:300px ";

                        }else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1)){
                          var newContent = document.createTextNode("SIGNO CAPRICORNIO Numero de las suerte: 28");

                      newDiv.appendChild(newContent); //añade texto al div creado.

                      var currentDiv = document.getElementById("div");
                      document.body.insertBefore(newDiv, currentDiv);
                      newDiv.style="border: 3px solid #ED883E; background-color:#ED883E; width: 200px ;height:300px ";

                          }else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2)){
                            var newContent = document.createTextNode("SIGNO ACUARIO Numero de las suerte: 07");


                      newDiv.appendChild(newContent); //añade texto al div creado.

                      var currentDiv = document.getElementById("div");
                      document.body.insertBefore(newDiv, currentDiv);
                      newDiv.style="border: 3px solid #39F3E8; background-color:#39F3E8; width: 200px ;height:300px ";

                            }else if ((nDia>22) && (nMes==21) || (nDia <=23) && (nMes==3)){
                              var newContent = document.createTextNode("SIGNO PISCIS Numero de las suerte: 12");
                            

                      newDiv.appendChild(newContent); //añade texto al div creado.

                      var currentDiv = document.getElementById("div");
                      document.body.insertBefore(newDiv, currentDiv);
                      newDiv.style="border: 3px solid #D36DD9; background-color:#D36DD9; width: 200px ;height:300px ";


        
      }

}
