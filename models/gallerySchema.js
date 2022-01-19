const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gallerySchema = new Schema({
    name: String,
    imageURL: String
});

module.exports = mongoose.model('gallery', gallerySchema);