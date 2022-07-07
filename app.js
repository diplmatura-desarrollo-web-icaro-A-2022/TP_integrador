"use stric";
// llamado de funciones
const { read } = require("./comandos/leer.js");
const { write } = require("./comandos/write.js");
const { editar } = require("./comandos/editar.js");
const { guardar } = require("./comandos/guardar.js");
const { borrar } = require("./comandos/borrar.js");
const { crear } = require("./comandos/new.js");
// declaracion de variables
const objeto = read("./libros.json");
const datos = read("./datos.txt");
const comando = process.argv[2];
const parametro = process.argv[3];
const nuevaInstruccion = process.argv[4];
const nuevaEdicion = process.argv[5];
// menu de app
switch (comando) {
  case "new":
    crear(parametro, nuevaInstruccion);
    break;
  case "guardar":
    guardar(objeto, datos);
    break;
  case "editar":
    editar(parametro, nuevaInstruccion, nuevaEdicion);
    break;
  case "borrar":
    borrar(objeto, parametro);
    break;
}
// la app funciona de la siguiente manera,
// el comando new carga los datos en un archivo txt pero no los guarda 
// ademas muestra por consola los datos que se van guardando,
// para que el nuevo archivo se cargue, se debe ejecutar el comando guardar,
// este comando guardara el archivo nuevo en mi base de datos solo si el id, 
// del nuevo archivo es distinto a los archivos cargados, dejando un mensaje de guardado
// en el caso de que coincida la id con alguno de los ya existentes no guardara el archivo,
// y dejara el mensaje de que el archivo ya existe 
// el comando borrar elimina un archivo segun la id que se ingrese,
// el comando editar edita la parte del archivo cuya id se ingrese.
// ejemplo: (node app.js editar 'martin fierro1927' title 'Segundo sombra') 
// en todos los casos mostrara el archivo que se modifica o elimina 