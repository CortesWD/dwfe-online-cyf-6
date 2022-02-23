/**
 * @description console log fn wrapper
 * @param {*} msn 
 */
const logger = (msn) => console.log(msn);

/**
 * @description sum two intg
 * @param {Number} num1 
 * @param {Number} num2
 */
const add = (num1,num2) => logger(num1 + num2);


const getGreater = (a,b) => {
  const getNum = Math.max(a,b);
  logger(`the greater num is ${getNum}`);

  return getNum;
}

getGreater(200000,2000001);

/**
 * @description potenciar numero
 * @param {*} msn 
 */
const potenciaDeDos = (n) => {
  const calc = Math.pow(n, 2);
  logger(`potencia dos de ${n} es ${calc}`);
  return calc;
}

potenciaDeDos(3);

const getSquare = (n) => {
  const q = Math.sqrt(n);
  console.log(`la raiz cuadrada de ${n} es ${q}`);
  return q;
}

getSquare(133);
