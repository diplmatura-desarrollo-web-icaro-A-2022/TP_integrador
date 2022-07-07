const fs = require("fs");

function write(filepath, objeto) {
  datostring = JSON.stringify(objeto, null, 2);
  var datos = fs.writeFileSync(filepath, datostring);
  return datos;
}

module.exports = { write };
