'use strict'

require('@code-fellows/supergoose');
const Notes = require('../models/notes-collection');


describe('note Model', () => {
    it('can create() a new food item ', () => {
      let obj = { payload: 'test text 1', category: 'home test' };
      return Notes.create(obj)
        .then(record => {
          Object.keys(obj).forEach(key => {
            expect(record[key]).toEqual(obj[key]);
          });
        });
    });

});

