const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  
  let cats = '^^';
  let counter = 0;
  for (let countArrayCurrentD = 0; countArrayCurrentD < matrix.length; countArrayCurrentD++ ){
       let arrayElemOne = matrix[countArrayCurrentD]; // это теперь у нас отдельный взятый первый элемент массива !!!!!!!!!!!
       for (let countElemsOFarrayOne = 0; countElemsOFarrayOne < arrayElemOne.length; countElemsOFarrayOne++){
         if (arrayElemOne[countElemsOFarrayOne] == cats){
           counter++;
         }
       }
  }
  return counter;
  // remove line with error and write your code here
};
