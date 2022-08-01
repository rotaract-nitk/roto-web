const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const activitySchema = new Schema({
    activityTitle: String,
    description: String,
    imageURL: String,
    Date: String,
});

const eventSchema = new Schema({
    eventTitle: String,
    eventDescription: String,
    eventThumbnail: String,
    activity: [activitySchema],
});

module.exports = mongoose.model('event', eventSchema);
