// FUNCIONES Q RETORNAN VALORES

function sumar(numero = 0, numero2 = 0) { // Esta podría definirse
                                          // como una "function declaration"
    return {
        resultado: numero + numero2, 
        msj: 'Hola Mundo'
    }
}

const {resultado, msj} = sumar(20, 30)

console.log(resultado)
console.log(msj)