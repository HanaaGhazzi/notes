'use strict'
 

const { v4: uuidv4 } = require('uuid');

function Notes (){

}

Notes.prototype.excute = function(message){
         if (message.action === 'add'){
            return this.add(message)
         }else if (message.action === 'a') {

            return this.add(message)
        }else{

            console.log('Please use add or a')
        }
    }

Notes.prototype.add = function (note){

   let idNote = uuidv4();
    note[idNote] = uuidv4() 

    console.log(note)
    if(note.payload){
        console.log(`Your notes has been saved ${note.payload}`)
    }else{
        console.log('Please entire a valid text')
    }
}
    

module.exports = Notes ;