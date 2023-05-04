// MANIPULAR HTML CON JS

const heading = document.querySelector('.heading')
heading.textContent ='Un nuevo Heading'
console.log(heading)

const inputNombre = document.querySelector('#nombre')
inputNombre.value = 'Un valor por default'
console.log(inputNombre)

const enlaces = document.querySelectorAll('.navegacion a')
enlaces.forEach( enlace => enlace.textContent = 'Nuevo Enlace')

