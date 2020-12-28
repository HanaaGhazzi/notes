'use strict'


const { v4: uuidv4 } = require('uuid');


class Notes {

    constructor() {

    }
    execute(value) {
        if (value) {
            this.add(value);
        }
    }

    add(value) {
        this.action = value.action;
        this.payload = value.payload;
        this.id = uuidv4();;
        console.log(`action: ${this.action} , my note: ${this.payload} , ID : ${this.id}`);
    }

}



module.exports = Notes;
