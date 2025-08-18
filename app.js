// Challenge
let amigos = []

function agregarAmigo() {
  let nombre = document.getElementById('amigo').value
  nombre = nombre.trim() // .trim() -> Es un método que sirve para quitar espacios al inicio y al final del texto

  if (nombre === '') {
    alert('Por favor, inserte un nombre 😊')
  } else {
    amigos.push(nombre) 
    document.getElementById('amigo').value = '' // Limpia el input
  }
  console.log(amigos)
}
