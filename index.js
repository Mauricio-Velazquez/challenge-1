var inputAEncriptar = document.querySelector(".encriptador");

function encriptar(){
    encriptarTexto(document.getElementById("mensaje").value);
}

var mayusculas = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

var acentos = ['á','é','í','ó','ú','Á','É','Í','Ó','Ú'];

function encriptarTexto(texto){
    var caracteres = texto.split("");
    var error = false;
    var nuevoTexto = "";
    for(var i = 0; i < caracteres.length; i++){
        if(caracteres[i] != 'a' && caracteres[i] != 'e' && caracteres[i] != 'i' && caracteres[i] != 'o' && caracteres[i] != 'u'){
            nuevoTexto = nuevoTexto + caracteres[i];
        }
        if('a' == caracteres[i]){
            nuevoTexto = nuevoTexto + "ai";
        }
        if('e' == caracteres[i]){
            nuevoTexto = nuevoTexto + "enter";
        }
        if('i' == caracteres[i]){
            nuevoTexto = nuevoTexto + "imes";
        }
        if('o' == caracteres[i]){
            nuevoTexto = nuevoTexto + "ober";
        }
        if('u' == caracteres[i]){
            nuevoTexto = nuevoTexto + "ufat";
        }
        if(mayusculas.includes(caracteres[i]) || acentos.includes(caracteres[i])){
            error = true;
            alert("Error: No se permiten acentos ni letras mayusculas, intente nuevamente.")
            document.getElementById("mensaje").value = "";
            break;
        }
    }
    if(error == false){
        document.getElementById("mensaje").value = "";
        if(nuevoTexto != ""){
            document.getElementById("copiar").style.visibility = "visible";
            document.getElementById("muñeco").style.visibility = "hidden";
            document.getElementById("texto").style.visibility = "hidden";
            document.getElementById("mensajeRecibido").value = nuevoTexto;
        }
    }
}

var inputADesecriptar = document.querySelector(".desencriptador");

function desencriptar(){
    desencriptarTexto(document.getElementById("mensaje").value);
}

function desencriptarTexto(texto){
    var mensajeEncriptado = texto.replaceAll("enter","e")
    .replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o")
    .replaceAll("ufat","u");
    var caracteres = mensajeEncriptado.split("");
    var error = false;
    for(var i = 0; i < caracteres.length; i++){
        if(mayusculas.includes(caracteres[i]) || acentos.includes(caracteres[i])){
            error = true;
            alert("Error: No se permiten acentos ni letras mayusculas, intente nuevamente.")
            document.getElementById("mensaje").value = "";
            break;
        }
    }
    if(error == false){
        document.getElementById("mensaje").value = "";
        if(mensajeEncriptado != ""){
            document.getElementById("copiar").style.visibility = "visible";
            document.getElementById("muñeco").style.visibility = "hidden";
            document.getElementById("texto").style.visibility = "hidden";
            document.getElementById("mensajeRecibido").value = mensajeEncriptado;
        }
    } 
}

var inputACopiar = document.querySelector(".copiador");

function copiarTexto(){
    document.getElementsByName("receptor")[0].disabled=false;
    var contenido = document.getElementById("mensajeRecibido");
    contenido.select();
    document.execCommand("copy");
    document.getElementsByName("receptor")[0].disabled=true;
}

inputAEncriptar.onclick = encriptar;

inputADesecriptar.onclick = desencriptar;

inputACopiar.onclick = copiarTexto;
