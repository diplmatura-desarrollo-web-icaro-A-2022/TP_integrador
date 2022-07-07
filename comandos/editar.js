"use stric";
const fs = require("fs");
const { read } = require("./leer.js");
const { write } = require("./write");
const { crear } = require("./new.js");
const { guardar } = require("./guardar.js");

function editar(comparador, comando, parametro) {
  const dato = read("./libros.json");

  for (let i = 0; i < dato.length; i++) {
    var objeto = dato.filter((ti) => ti.id.includes(comparador));
    var objetoFiltrado = dato.filter((ti) => !ti.id.includes(comparador));
  }

  if (objetoFiltrado.length === dato.length) {
    console.log("El archivo no existe, utilice el comando new");
  } else if (objetoFiltrado.length != dato.length) {
    switch (comando) {
      case "title":
        objeto[0].title = parametro;
        break;
      case "author":
        objeto[0].author = parametro;
        break;
      case "genre":
        objeto[0].genre = parametro;
        break;
      case "year":
        objeto[0].year = parametro;
        break;
      case "cost":
        objeto[0].cost = parametro;
        break;
      case "price":
        objeto[0].price = parametro;
        break;
    }
    objeto[0].id = objeto[0].title + objeto[0].year;

    write("./daos.txt", objeto);

    const obojetocortado = JSON.parse(
      fs.readFileSync("./daos.txt").toString().slice(1, -1)
    );
    write("./daos.txt", obojetocortado);

    guardar(objetoFiltrado, obojetocortado);
  }
}
module.exports = { editar };
