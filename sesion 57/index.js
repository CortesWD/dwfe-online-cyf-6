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
  const getNum = a > b ? a : b;
  logger(`the greater num is ${getNum}`);

  return getNum;
}
