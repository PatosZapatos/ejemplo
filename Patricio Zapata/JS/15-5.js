let num = 234;
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
}