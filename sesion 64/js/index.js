/**
 * @description Function invert string texts
 * @param {String} entry - string para invertir
 * @returns {String}
 */
function invertirString(entry) {
  if (typeof entry !== "string") return;
  if (!entry.length) return "";
  const stringToArray = entry.split("");
  const invertedArray = stringToArray.reverse();
  return invertedArray.join("");
}


/**
 * @description Unit testing for invertirString
 * @returns {void}
 */
function testInvertirString() {
  /** Funcionamiento Normal */
  console.assert(invertirString("holas") === "saloh", "el valor es incorrecto");

  /** No String param value */
  console.assert(invertirString(2) === undefined, "se esperaba undefined para valores que no son string");
  console.assert(invertirString({}) === undefined, "se esperaba undefined para valores que no son string");
  console.assert(invertirString([]) === undefined, "se esperaba undefined para valores que no son string");
  console.assert(invertirString() === undefined, "se esperaba undefined para valores que no son string");
  console.assert(invertirString(null) === undefined, "se esperaba undefined para valores que no son string");

  /** No se pasa parametro en la funcion */
  console.assert(invertirString("") === "", "se esperaba un string vacio"); 
  
  /** Funcionamiento con Error */
  console.assert(
    (invertirString("holas") !== "saloh") === false,
    "La validacion es incorrecta"
  );
}

testInvertirString();