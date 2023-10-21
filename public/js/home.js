let titulo = document.querySelector('h1');
let nombre = prompt('Ingresa tu nombre completo');
let cuerpo = document.querySelector('body');
let contenedor = document.querySelector('.container')

if (nombre === 'Laura Vanesa Amaya') {
    titulo.innerText += " " + nombre;
    cuerpo.style.display = 'block';
    contenedor.style.display = 'block'
}else{
    titulo.innerText = `Error: ${nombre} tu no eres la cumpleañera`;
    cuerpo.style.display = 'block'
}