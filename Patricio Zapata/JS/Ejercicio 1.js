function Ejercicio1() {
    var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    for (let i = 0; i < meses.length; i++) {
        console.log(meses[i]);
    }
}

function Ejercicio2() {
    var valores = [true, 5, false, "hola", "adios", 2];
    var valor = "";

    for (let i = 0; i < valores.length; i++) {
        if (typeof (valores[i]) == "string") {
            if (valores[i].length > valor.length) {
                valor = valores[i];
            }
        }
    }

    console.log("el mayor es " + valor);

    //comparacion directa
    if (valores[3].length > valores[4].length) {
        console.log("hola en mayor");
    } else {
        console.log("adios en mayor")
    }
}


function Ejercicio3() {

    var numero1 = 5;
    var numero2 = 8;
    if (numero1 <= numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if (numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if (numero1 < 0 || numero1 > 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    if (numero1 < numero2 - 1) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}



function Ejercicio4() {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

    var dni = document.querySelector("#dni").value;
    var letraUsuario = document.querySelector("#letra").value;
    var letraUsuarioMayuscula = letraUsuario.toUpperCase();

    if (dni > 0 && dni < 99999999) {
        var posi = dni % 23;
        if (letras[posi] == letraUsuarioMayuscula) {
            console.log("El número DNI y la letra son correctos");
        } else {
            console.log("La letra que ha indicado no es correcta");
        }
    } else {
        console.log("El número proporcionado no es válido");
    }

}


function Ejercicio5() {
    var num = document.querySelector("#num").value;
    var valorGuardado = 1;

    for (i = 1; i <= num; i++) {
        var valorGuardado = valorGuardado * i;
    }
    console.log("El resultado es " + valorGuardado);
}


function Ejercicio6() {
    var num = prompt("Introduce un número entero");
    if (num % 2 == 0) {
        document.write("<br>El número es par.");
    }
    else {
        document.write("<br>El número es impar.");
    }
}

function Ejercicio7() {
    var text = document.querySelector("#text").value;

    if (text == text.toUpperCase()) {
        console.log("El texto está en mayúscula.");
    }
    else if (text == text.toLowerCase()) {
        console.log("El texto está en minúscula.");
    }
    else {
        console.log("El texto es mixto.")
    }
}

function Ejercicio8() {
    var frase = prompt("Introduzca una frase para saber si es palindromo")
    var fraseSimple = frase.split(" ").join("").toLowerCase();
    const fraseReversa = fraseSimple.split("").reverse().join("");

    if (fraseSimple == fraseReversa) {
        console.log("La frase es palindromo.");
    }
    else {
        console.log("La frase no es palidromo.")
    }
}

function Ejercicio9() {
    
}