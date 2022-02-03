/*

e --> enter
o --> ober
i --> imes
a --> ai
u --> ufat
*/
//i es para q afecte a mayusculas y minusculas
// g es para toda la linea u oracion
//m es para q afecte a todo el parrafo

function encriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();    
    
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"ober");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("texto2").value = txtCifrado;
}


function desencriptar() {
    var texto = document.getElementById("inputTexto").value.toLowerCase();

    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/ober/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

document.getElementById("texto2").value = txtCifrado;


}
function copiar() {

var contenido = document.querySelector("#texto2");
contenido.select();
document.execCommand("copy");
alert("Copiado correctamente");
document.getElementById("inputTexto").value = "";
document.getElementById("inputTexto").focus();
document.getElementById("texto2").value = "";
}


