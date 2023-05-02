// FUNCTIONS - OTROS ARRAY METHODS

const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const numeros = [10, 20 ,30]

let nuevoArray;

// FILTER - Los que cumplan o los que sean diferen. a la condición que se coloque
// nuevoArray = tecnologias.filter(techs => techs !== "React")

// INCLUDES - Comprobar si un eleme. existe en el Array
// const resultado = tecnologias.includes('React')

// SOME - Si al menos un eleme. del Array cumple con la condición...
// const resultado = numeros.some( numero => numero > 15 )

// FIND - Devuelve el primer elem. que cumple la condición...
// const resultado = numeros.find( numero => numero > 15 )

// EVERY - Retorna True o False si todos cumplen la condición
// const resultado = numeros.every( numeros => numeros > 9)

// REDUCE - Acumula los elementos(numeros) y los suma iniciando desde el numero de acumlación que desee
// const resultado = numeros.reduce( (total, numeros) => numeros + total, 0)

// FILTER - Retorna con respecto a la condición que se indique
// const resultado = tecnologias.filter( tecnologias => tecnologias !== 'Node.js')
// const resultado = numeros.filter( numeros => numeros < 20)

// FOREACH - Sirve para iterar (En este caso se utiliza para iterar sbre el Array)
// tecnologias.forEach( (tech, index) => console.log( index))

// MAP - Itera y return un nuevo array
const arrayMap = tecnologias.map( tech => tech)
console.log(arrayMap)


// console.log(resultado)