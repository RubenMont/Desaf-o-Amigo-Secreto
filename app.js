// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo(){
    let nombreNuevo = document.getElementById("amigo").value.trim();
    if (nombreNuevo === ""){
        alert("Favor de escribir un nombre válido");
    }
    else{
        amigos.push(nombreNuevo);
        document.getElementById("amigo").value = "";
        agregaNombre();
    }
    console.log(amigos);
    return;
}

function agregaNombre (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++){
        let elemento = document.createElement("li"); // Crear un elemento <li>
        elemento.textContent = amigos[i]; // Asignar el nombre del amigo al <li>
        lista.appendChild(elemento); // Agregar el <li> a la lista en el HTML
    }
    console.log(lista);
}

function sortearAmigo(){
    let lista = document.getElementById("listaAmigos");
    let ganador = document.getElementById("resultado");
    if (amigos.length == 0){
        alert("Agregue nombres primero por favor");
    }
    else{
        elementoRandom = parseInt(Math.floor(Math.random()*amigos.length));
        ganador.innerHTML = `🎉${amigos[elementoRandom]}🎉`;
        lista.innerHTML = "";
        amigos.length = 0;
    }
}