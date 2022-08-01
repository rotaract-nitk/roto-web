
const { ObjectId } = require('mongodb');
const eventSchema = require('../models/eventSchema');



module.exports.index = async (req, res) => {
    const events = await eventSchema.find({});
    res.render('events', { events });
}



module.exports.showEvent = async (req, res) => {
    const events = await eventSchema.findById(req.params.id);
   


    console.log(events);
    if (!events) {
        return res.redirect('/events');
    }
    if(events._id.equals(ObjectId("6251e561cf48b169b028cecf")))
    res.render('hosTiles',{ events})
    else
    res.render('showEvent', { events });
}