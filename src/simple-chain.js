const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainM:[],
  getLength() {
    return this.chainM.length;
  },
  addLink(value) {
    this.chainM.push(`${value}`);
   return this;

  },
  removeReference(location) {
    if (typeof location != "number" || location<1 || location> this.chainM.getLength()){
      this.chai =[];
    throw new Error('You can\'t remove incorrect link!');
    } else {
      this.chainM.splice(location-1,1);
    }
    
  },
  reverseChain() {
    this.chainM.reverse();
    return this;
  },
  finishChain() {
    const final = this.chainM.join(")~~(");
    this.chainM = []
    return `(${final})`;
  }
};

module.exports = {
  chainMaker
};
