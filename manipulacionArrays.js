// Operaciones en los Arrays

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// AÑADIR ELEMEN. A UN ARRAY

// tecnologias.push('GraphQL') // Añade elem. al final del Array - No para React
// tecnologias.unshift('GraphQL') // Añade elem. al inicio del Array - No para React

// const nuevoArray = [...tecnologias, 'GraphQL'] - SpreadOperator SI para React
// const nuevoArray = ['GraphQL', ...tecnologias] - SpreadOperator SI para React


// ELIMINAR ELEMENTS A UN ARRAY
// tecnologias.pop() // Elimina el elem. final del Array - No para React
// tecnologias.shift() // Elimina el 1er elem. del Array - No para React
// tecnologias.splice(3) // Elimina una posición especifica - No para React

// const nuevoArray = tecnologias.filter( function(techs) { --
//    return techs === 'JavaScript'                         ---SI para React
// } )                                                      --


// REEMPLAZAR ELEMENTS A UN ARRAY
// tecnologias[0] = 'GraphQL' - Esta forma de reemplazo NO para React

// const nuevoArray = tecnologias.map( function(techs) { --
//    if(techs === 'HTML') {                             ---
//        return 'GraphQL'                               ---- '.map' si para-
//    } else {                                           ---   reemplazar en-
//        return techs                                   --     React 
//    }
//} )




console.table(tecnologias)
console.table(nuevoArray)