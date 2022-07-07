"use stric";
const fs = require("fs");

function read(filepath) {
  var datos = JSON.parse(fs.readFileSync(filepath).toString());
  return datos;
}

module.exports = { read };
