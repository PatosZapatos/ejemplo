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
    if (numero1 < numero2) {
        console.log("numero1 no es mayor que numero2");
    }
    if (numero2 > 0) {
        console.log("numero2 es positivo");
    }
    if (numero1 < 0 || numero1 != 0) {
        console.log("numero1 es negativo o distinto de cero");
    }
    numero1 = numero1 + 1;
    if (numero2 > numero1) {
        console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
    }
}



function Ejercicio4(params) {
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K',
        'E', 'T'];

    var dni = document.querySelector("#entrada").value;

}