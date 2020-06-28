const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const SignupSchema = new Schema({
    name: String,
    address: String,
    gender: String,
    DOB: Date,
    email: String,
    phone_number: Number,
    password: String,
    cp: String,
 });

 var Signupdata = mongoose.model('signupdata',SignupSchema);

 module.exports = Signupdata;