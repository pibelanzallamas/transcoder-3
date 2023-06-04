const bcrypt = require("bcrypt");

function boton1() {
  let toCode = prompt("ingrese texto: ");
  let code = coding(toCode);
  alert(code);
}
function boton2() {
  let toDeco = prompt("ingrese texto: ");
  let deco = decoding(toDeco);
  alert(deco);
}

function coding(toCode) {
  return btoa(toCode);
}

function decoding(toDeco) {
  return atob(toDeco);
}
