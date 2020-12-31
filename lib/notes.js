'use strict';

const mongoose = require('mongoose');
// const Notes = require('../models/notes-schema.js');
const notes = require('../models/notes-collection')
class Note {
  constructor(value) {
    this.action = value.action;
    this.payload = value.payload;
    this.action2 = value.action2;
    this.category = value.category;
  }

  execute(value) {
    if (value.action === 'add' || value.action === 'a') {
      return this.add(value);
    }
    else if (value.action === 'delete' || value.action === 'd') {
      return this.delete(value);
    }
    else if (value.action === 'list' || value.action === 'l') {
      return this.list(value);
    }
  }

  async add(value) {

    // const record = new Notes(value);
    // console.log('recored :',record);
    // const saved = await record.save();
    // console.log('note saved :',saved);
    // return saved;

    const saved = await notes.create(value)
    return saved
  }

  async delete(value) {
    // const deleted = await Notes.findByIdAndDelete(value.payload) ;
    // console.log('deleted note:',value.payload);
    // return deleted; 

    const deleted = await notes.delete(value.payload);//lab4
    console.log('deleted note:', value.payload);
    return deleted;
  }

  async list() {
    // const listed =  await Notes.find({}) ;
    // if (this.payload) {
    //   for ( let i=0 ; i<listed.length ; i++){
    //     if (this.payload===listed[i].category){
    //       console.log("only certain category: ", listed[i]);  
    //     }
    //   }

    const listed =  await notes.get({}) ;//lab4
    
    if (this.payload) {
      for ( let i=0 ; i<listed.length ; i++){
        if (this.payload===listed[i].category){
          console.log(`
          ${listed[i].payload}
            Category: ${listed[i].category}        ID: ${listed[i]._id}
          ----------------------------------------------------------`);          
        }
      }
    }
    
    else{
      for ( let i=0 ; i<listed.length ; i++){
        console.log(`
        ${listed[i].payload}
          Category: ${listed[i].category}        ID: ${listed[i]._id}
        ----------------------------------------------------------`);          
        
      }
    }
  }
}

module.exports = Note;