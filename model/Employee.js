const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
    firstname: {
        type: String,
        require: true
    },
    lastname: {
        type: String,
        require: true
    }
})

//mongoose will automatically look for the lowercase and plural version of the first parameter below (your model name)
module.exports = mongoose.model('Employee', employeeSchema);