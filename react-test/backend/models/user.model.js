const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    cnpj:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 14
    },
},{
timestamps: true,
});
const User = mongoose.model('User', userSchema);
module.exports = User