"use stric";
const fs = require("fs");
const { read } = require("./leer.js");
const { write } = require("./write");

function borrar(dato, ID) {
  for (let i = 0; i < dato.length; i++) {
    var ListaFiltrada = dato.filter((ti) => !ti.id.includes(ID));

    var objBorrado = dato.filter((ti) => ti.id.includes(ID));
  }
  write("./libros.json", ListaFiltrada);
  console.log("se elimino el archivo", objBorrado);
}

module.exports = { borrar };
