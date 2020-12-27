'use strict'

const minimist = require('minimist');


function Add(){
   


    const args = minimist(process.argv.slice(2));

    //args= { _: [], add: 'hi esraa' }
    //args.add='hi esraa'
    let key = Object.keys(args);
   
     
    this.action = key[1];
    this.payload = args[key[1]];

    this.obj = {};
    this.obj.action=this.action
    this.obj.payload=this.payload;
    console.log(this.obj)
    return this.obj
}


module.exports = Add;