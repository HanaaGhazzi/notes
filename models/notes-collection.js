'use strict'

const schema = require('./notes-schema');

class NoteDB {
    constructor (){

    }

    create(obj) {
        
        let newRecord = new schema(obj);
        console.log('note saved' , newRecord)

                return newRecord.save();
    }

    get(val){
        const listed = schema.find({}) ;//lab4
        return listed;
    }

    update(value, obj) {
        let updated = schema.findByIdAndUpdate(value, obj, {new: true})
        return updated
    }

    delete(_id) {
        let deleted = schema.findByIdAndDelete(_id);
        return deleted

    }


}

module.exports = new NoteDB(); 
