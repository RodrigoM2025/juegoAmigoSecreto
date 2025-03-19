// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos); // Debería mostrar un array vacío: []

function agregarAmigo() {
    //Captura el valor del campo de entrada
    let input = document.getElementById("amigo").value.trim(); // Obtenemos el valor del campo y eliminamos espacios en blanco

    //Validar entrada
    if (input === "") {
        alert("Por favor, inserte un nombre."); // Muestra mensaje de error si el campo está vacío
        return; // Sale de la función si la validación falla
    }

    //Añadir el nombre al array de amigos
    amigos.push(input); // Agrega el nombre al array

    // Limpiar el campo de entrada
    document.getElementById("amigo").value = ""; // Reseteamos el texto y lo dejamos vacío

    actualizarLista(); // Actualizar la lista de amigos en la página

    // Muestra el array actualizado en consola 
    console.log(amigos);
}

function actualizarLista() {
    //Obtener el elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista 
    lista.innerHTML = "";

    // Iterar sobre el arreglo amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento <li>
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Asigna el nombre del amigo al texto del <li>

        // Agregar el elemento <li> a la lista
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos disponibles para sortear. Por favor, agrega nombres.");
        return; // Salir de la función si no hay amigos
    }

    // Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo Secreto: <strong>${amigoSorteado}</strong></li>`;
}

