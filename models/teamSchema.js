const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    name: String,
    role: String,
    imageURL: String,
    gmail: String,
    insta: String,
    linkedIn: String
});

module.exports = mongoose.model('team', teamSchema);