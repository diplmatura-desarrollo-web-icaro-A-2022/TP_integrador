"use stric";
// llamado de funciones
const { read } = require("./leer.js");
const { write } = require("./write.js");
const objetoVacio = {
  id: "",
  title: "",
  author: "",
  genre: "",
  year: "",
  cost: "",
  price: "",
};

function guardar(objet, elementoAguardar) {
  let listaMapeada = objet.map((elemento) => elemento.id);

  let control = listaMapeada.filter((x) => x.includes(elementoAguardar.id));

  if (control == elementoAguardar.id) {
    console.log("No se guardo el archivo porque ya existe");
  }
  if (control != elementoAguardar.id) {
    objet.push(elementoAguardar);
    console.log("se guardo el archivo", elementoAguardar);
    write("./libros.json", objet);
  }
  write("./datos.txt", objetoVacio);
}

module.exports = { guardar };
