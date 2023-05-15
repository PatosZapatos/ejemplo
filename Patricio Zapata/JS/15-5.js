let num = 445;
function ejemplo(params) {
    let inp = document.querySelector("#entrada");
    let p = document.querySelector("#salida");
    let valor = inp.value;
    let divImg = document.querySelector("#img");
    divImg.innerHTML = '<img src="../img/papasfritas.jpg" alt = "error"/>'
    p.innerText = valor;
    console.log(p.value);
    console.log(valor);
    console.dir(inp);
    let r = num - "45";
    console.log(r);
}