// ITERADORES EN ARREGLOS JS

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// .forEach() - Acceder a cada elemento del array
const arrayForEach = tecnologias.forEach( function(techs) {
    console.log(techs)
} )

// .map() - Te permite crear un nuevo Array
const arrayMap = tecnologias.map( function(techs) {
    return techs
} )

console.log(arrayForEach)
console.log(arrayMap)