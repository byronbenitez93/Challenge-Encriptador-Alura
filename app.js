let texto = document.getElementById("txtEncryptDecrypt");
let rectangle1 = document.querySelector("#rectangle1");
let rectangle2 = document.querySelector("#rectangle2");
let txtEncrypt = document.querySelector("#txtEncryptDecrypt");
let btnEncrypt = document.querySelector(".btnEncrypt");
let btnDecrypt = document.querySelector(".btnDecrypt");
let btnCopy = document.querySelector(".btnCopy");

//funcion ocultar rectangulo 1 y mostrar el rectangulo 2
function rectangulo() {
    rectangle1.style.display = "none";
    rectangle2.style.display = "inline";
}

//funcion encriptar
function encriptarTexto() {
    let textoIn = texto.value.toString().toLowerCase();
    let nuevoTexto = textoIn
        .replace(/e/igm, 'enter')
        .replace(/i/igm, 'imes')
        .replace(/a/igm, 'ai')
        .replace(/o/igm, 'ober')
        .replace(/u/igm, 'ufat');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

//funcion desencriptar
function desencriptarTexto() {
    let textoIn = texto.value;
    let nuevoTexto = textoIn
        .replace(/enter/igm, 'e')
        .replace(/imes/igm, 'i')
        .replace(/ai/igm, 'a')
        .replace(/ober/igm, 'o')
        .replace(/ufat/igm, 'u');
    document.getElementById("areaEncrypt").innerHTML = nuevoTexto;
}

//Funcion Copiar
async function copy() {
    try {
        const content = document.getElementById('areaEncrypt');
        await navigator.clipboard.writeText(content.value);
        console.log('Texto copiado al portapapeles');
        document.getElementById("txtEncryptDecrypt").value = "";
    } catch (error) {
        console.error('Error al copiar el texto:', error);
    }
}


//Botones
btnEncrypt.addEventListener('click', function () {
    rectangulo();
    encriptarTexto();

});

btnDecrypt.addEventListener('click', function () {
    rectangulo();
    desencriptarTexto();
});

btnCopy.addEventListener('click', function () {
    copy();
});