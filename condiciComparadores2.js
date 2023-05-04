// COMPARACIÓN Y OPERADOR ESTRICTO

/**
 * == - Comparación, pero no es estricto
 * === - Comparación estricta - Revisa valor y tipo de Dato
 */

const numero1 = 20
const numero2 = "20"

if(numero1 === Number(numero2)) {
    console.log("Son iguales")
} else {
    console.log("No son iguales")
}