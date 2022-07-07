"use stric";
// console.log(" cree este nuevo archivo ");
const { read } = require("./leer.js");
const { write } = require("./write.js");
function crear(comando, param) {
  const objeto = read("./datos.txt");
  const parametro = param;

  switch (comando) {
    case "title":
      objeto.title = parametro;
      break;
    case "author":
      objeto.author = parametro;
      break;
    case "genre":
      objeto.genre = parametro;
      break;
    case "year":
      objeto.year = parametro;
      break;
    case "cost":
      objeto.cost = parametro;
      break;
    case "price":
      objeto.price = parametro;
      break;
  }
  objeto.id = objeto.title + objeto.year;

  console.log(objeto);
  write("./datos.txt", objeto);
}

// var comando = process.argv[2];
// var parametro = process.argv[3];

// crear(comando, parametro);
module.exports = { crear };
