
var botonEncriptar = document.getElementById(encriparBoton);

var ArrayEncriptar = ["i", "retn","sem","reb","taf"];
var ArrayVocales = ["a","e","i","o","u"];

var ArrayDesencriptar = ["i", "nter", "mes", "ber", "fat"];
let posicion = 0;
var auxposicon = 0;
function EncriptarFrase (){

    var OracionAEncriptar = document.getElementById("encriptarFrases").value;
    console.log(OracionAEncriptar);

  var arrayAux = Array.from(OracionAEncriptar);


    for(let i = 0 ; i < arrayAux.length; i++){ 
        for (let j = 0; j < ArrayVocales.length-1; j++) {
                if(arrayAux[i] == ArrayVocales[j]){
                    arrayAuxD = Array.from(ArrayEncriptar[j])
                  
                  for (let k = 0; k < arrayAuxD.length; k++) {
                        posicion = i+1;
                        arrayAux.splice(posicion,0,arrayAuxD[k]);
                        posicion++;
                        auxposicon++;
                        
                }
                i += auxposicon+1;
                auxposicon = 0;
                posicion = 0;
        }
      }
    var auxString = arrayAux.toString();
    document.getElementById("encriptarFrases").value = auxString.replace(/,/g,""); 
} }

function DesEncriptarFrase(){

  var OracionADesEncriptar = document.getElementById("desencriptarFrase").value;

  var arrayAux = Array.from(OracionADesEncriptar);

  for (let i = 0; i < arrayAux.length; i++) {

    for (let j = 0; j < ArrayVocales.length-1; j++) {
      if (arrayAux[i] == ArrayVocales[j] ) {
        var ArrayDesencriptarAux = Array.from(ArrayDesencriptar[j]);
        for (let k = 0; k < ArrayDesencriptarAux.length; k++) {
               var aux  = i+1;
               if(arrayAux[aux] == ArrayDesencriptarAux[k]){
                    
                arrayAux[aux] = "";

               }

               i++;

        }

      }
    }

    

}

var auxString = arrayAux.toString();
document.getElementById("desencriptarFrase").value = auxString.replace(/,/g,""); 

}


//Funcion Copiar
function copyToClipBoard() {

  var content = document.getElementById('encriptarFrases'); //Tomamos el contenido de input
  
  content.select(); //seleccionamos el contendio
  var alerta = document.execCommand("copy", true, null); //copiamos el contendido

  if(!alerta){ //alerta de errores
      alert("Hubo un problema con copiar el texto");
  }else{
      alert("Texto Copiado Correctamente");
  }
}


function copyToClipBoard2() {

  var content = document.getElementById('desencriptarFrase'); //Tomamos el contenido de input
  
  content.select(); //seleccionamos el contendio
  var alerta = document.execCommand("copy", true, null); //copiamos el contendido

  if(!alerta){ //alerta de errores
      alert("Hubo un problema con copiar el texto");
  }else{
      alert("Texto Copiado Correctamente");
  }
}

