// Objectos - Manipulación

const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: true,
};

// Object.freeze(producto) = No deja modificarlo
// Object.seal(producto) = Puedes modificar propiedades existentes, no permite añadir
                            // ni eliminar nuevas var.
// Reescribir un valor

producto.nombre = "Monitor Curvo";

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg";

// Eliminar var de objeto
delete producto.disponible;

console.table(producto);
