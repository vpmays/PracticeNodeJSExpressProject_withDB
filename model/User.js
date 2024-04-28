const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    roles: {
        User: {
            type: Number,
            default: 2001
        },
        Editor: Number,
        Admin: Number,
    },
    password: {
        type: String,
        reuired: true
    },
    refreshToken: String
});

//mongoose will automatically look for the lowercase and plural version of the first parameter below (your model name)
module.exports = mongoose.model('User', userSchema);