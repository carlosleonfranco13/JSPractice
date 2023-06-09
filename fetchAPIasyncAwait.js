// FETCH API CON ASYNC AWAIT

const url = "https://jsonplaceholder.typicode.com/comments";

// const consultarAPI = () => {
//   fetch(url)
//     .then((respuesta) => respuesta.json())
//     .then((resultado) => {
//       resultado.forEach((comentario) => {
//         console.log(comentario);
//       });
//     });
// };

const consultarAPI = async () => {
  const respuesta = await fetch(url)
  const resultado = await respuesta.json()
    resultado.forEach(comment => {
        console.log(comment)
    });
};

consultarAPI();
