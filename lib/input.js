'use strict';

const minimist = require('minimist');

// sample inputs : 
// node index.js --add <my note> --category <work>
// node index.js --delete <note ID>
// node index.js --list 
// node index.js --list <certain category>


class Input {
  constructor(){
    const args = minimist(process.argv.slice(2));

    const payloadVar = process.argv[3];
    const category = process.argv[5];
    this.action2 = this.getAction2(Object.keys(args)[2]);
    this.action = this.getAction(Object.keys(args)[1]);
    this.payload = this.getPayload(payloadVar);
    this.category = this.getCategory(category)
  }

  
  getAction(action) {
    const vaildActions = /(^a$)|(^add$)|(^d$)|(^delete$)|(^l$)|(^list$)/i;
    return vaildActions.test(action) ? action : 'Enter a valid action';
  }

  getPayload(payload) {
    return payload ? payload : undefined;
  }

  getAction2(action2) {
    const vaildActions = /(^c$)|(^category$)/i;
    return vaildActions.test(action2) ? action2 : 'Enter a valid action2';
  }

  getCategory(category) {
    return category ? category : undefined;
  }

  valid() {
    // return this.payload && this.action && this.category;
    if(this.action === 'add' || this.action === 'a') {
        return this.payload && this.action && this.category && this.action2;
      }
      else if(this.action === 'delete' || this.action === 'd') {
        return this.payload && this.action;
      }
      else if(this.action === 'list' || this.action === 'l') {
        return this.payload ? this.payload && this.action : this.action ;      }   
  }
  
}

module.exports = Input;