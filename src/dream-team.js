const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
   /* throw new NotImplementedError('Not implemented'); */
   if ( Array.isArray(members) == false || members.length == 0n) return false;

   let array1 =  []; 

   members = members.filter(e => typeof(e)=="string" && e != " ").map(e => e.trim()).map(e=>array1.push(e[0]));
   
   return array1.sort().join('').toUpperCase();
}

module.exports = {
  createDreamTeam
};
