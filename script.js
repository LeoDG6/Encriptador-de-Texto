const entrada = document.getElementById('textarea-entrada');
const salida = document.getElementById('textarea-salida');
const butonEncriptar = document.getElementById('boton-encriptar');
const botonDesenciptar = document.getElementById('boton-desencriptar');
const botonCopia = document.getElementById('boton-copiar');
const contenedorInicio = document.getElementById('contenedor-inicio');
const contenedorSalida = document.getElementById('contenedor-salida');

contenedorInicio.style.display = "";
contenedorSalida.style.display = "none";

butonEncriptar.onclick = encriptar;
botonDesenciptar.onclick = desenciptar;
botonCopia.onclick = copiar;

// Se crea un array con los caracteres del string, 
// después se hace una iteración remplazando las vocales.
function encriptar() {
    let array = [];

    for (let i of entrada.value) {
        array.push(i);
    }

    for (let i = 0; i < array.length; i++) {
        if (array[i] == "a") {
            array[i] = "ai";
        }
        else if (array[i] == "e") {
            array[i] = "enter";
        }
        else if (array[i] == "i") {
            array[i] = "imes";
        }
        else if (array[i] == "o") {
            array[i] = "ober";
        }
        else if (array[i] == "u") {
            array[i] = "ufat";
        }
    }

    contenedorInicio.style.display = "none";
    contenedorSalida.style.display = "";

    salida.value = array.join("");
    entrada.value = "";
}

// Con el método replace() se busca la cadena a remplazar.
// Se utiliza una expresión regular y la bandera global para remplazar 
// todas las coincidencias.
function desenciptar(){
    const _a =/ai/g;
    const _e = /enter/g;
    const _i = /imes/g;
    const _o = /ober/g;
    const _u = /ufat/g;
    let sal = entrada.value.replace(_a, 'a')
                        .replace(_e, 'e')
                        .replace(_i, 'i')
                        .replace(_o, 'o')
                        .replace(_u, 'u');
    
    contenedorInicio.style.display = "none";
    contenedorSalida.style.display = "";

    salida.value = sal;
    entrada.value = "";
}

function copiar(){
    salida.select();
    document.execCommand("copy");
}
