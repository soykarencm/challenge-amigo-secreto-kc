// Challenge Amigo Secreto
let amigos = [];

function agregarAmigo() {
  let nombre = document.getElementById('amigo').value;
  nombre = nombre.trim(); // .trim() -> Es un método que sirve para quitar espacios al inicio y al final del texto

  if (nombre === '') {
    alert('Por favor, inserte un nombre 😊');
  } else {
    amigos.push(nombre);
    document.getElementById('amigo').value = ''; // Limpia el input
    lista();
  }
  // console.log(amigos);
}

function lista() {
  let listaDeNombres = document.querySelector('#listaAmigos');

  // Limpia la lista existente para que no haya duplicados al actualizar
  listaDeNombres.innerHTML = '';

  // Recorrer el array y añadir a cada amigo en <li> con la ayuda de un template string
  for (let i = 0; i < amigos.length; i++) {
    listaDeNombres.innerHTML += `<li>${amigos[i]}</li>`;
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos registrados para sortear 😅');
    return;
  }

  // Generar un índice aleatorio
  let nombreAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado y mostrarlo
  const resultado = document.getElementById('resultado');
  resultado.innerHTML += `<li>${amigos[nombreAleatorio]}</li>`;

  // Reiniciar todo para volver a empezar
  amigos = []; // vaciar array
  document.getElementById('listaAmigos').innerHTML = ''; // limpiar lista visual
  document.getElementById('amigo').value = '';
}
