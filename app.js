// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let amigo = inputAmigo.value;

    if (amigo == "") {
        alert("Debes ingresar un nombre");
        return;
    }
    listaAmigos.push(amigo);
    console.log(listaAmigos);
    inputAmigo.value = "";
    inputAmigo.focus();
    enlistarAmigos();
}

function enlistarAmigos() {
    let amigos = document.getElementById("listaAmigos");
    amigos.innerHTML = "";
    for(let i = 0; i < listaAmigos.length; i++){
        let elemento = document.createElement("li");
        elemento.textContent = listaAmigos[i];
        amigos.appendChild(elemento);
    }
}

function sorteo() {
    if(listaAmigos.length < 2) {
        alert("Agrega más amigos");
        return;
    }
    console.log(listaAmigos.length);
    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let ganador = document.getElementById("resultado");
    ganador.innerHTML = `El ganador es ${sorteado}`;
    let clear = document.getElementById("listaAmigos");
    clear.innerHTML = "";
}