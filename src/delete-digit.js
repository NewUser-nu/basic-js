const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const mainN = [];
  for(let i =0;i<`${n}`.length;i++){
    const newA = `${n}`.split('');
    newA.splice(i,1)
    mainN.push(newA.join(''));
  }
  return +mainN.sort((a,b)=>b-a).splice(0,1).join('');

  // throw new NotImplementedError('Not implemented');
}

module.exports = {
  deleteDigit
};
