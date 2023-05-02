// Objetos - Unir 2 o más objetos

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

const cliente = {
  nombre: "Carlos",
  premium: true,
};

// const nuevoObjeto = Object.assign(producto, cliente) // NOOOOOO

const nuevoObjeto2 = { 
    producto: {...producto}, 
    cliente: {...cliente} 
}

console.log(nuevoObjeto2)