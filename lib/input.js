'use strict'

const minimist = require('minimist');


class Add {

    constructor() {

        const args = minimist(process.argv.slice(2));
        const payloadVar = (args.a)? (args.a) : (args.add);
        
        this.action = this.getAction(Object.keys(args)[1]);
        this.payload = this.getPayload(payloadVar);

    }

    getAction(action) {
        const vaildActions = /(^a$)|(^add$)/i;
        return vaildActions.test(action) ? action : 'Enter a valid action';
        }
      

      getPayload(payload) {
        return payload ? payload : undefined;
      }

      
  valid() {
    return this.payload && this.action;
  }
    
}


module.exports = Add;