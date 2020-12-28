'use strict'


const Notes = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Note Module', () => {
    it('does nothing when execute() is called with invalid data', () => {
        const txtNote = new Notes();
        txtNote.execute();
        expect(console.log).not.toHaveBeenCalled();
    });
    it('logs data when execute() is called with valid data', () => {
        const txtNote = new Notes();
        txtNote.execute({ action: 'add', payload: 'text note' });
        expect(console.log).toHaveBeenCalled();
    });
  });