'use strict'

const Add = require('./lib/input.js')
const Notes = require('./lib/notes.js')

const message = new Add();
const txtNote = new Notes(); 

txtNote.excute(message);