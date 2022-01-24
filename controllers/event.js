const eventSchema = require('../models/eventSchema');


module.exports.index = async (req, res) => {
    const events = await eventSchema.find({});
    res.render('events', { events });
}



module.exports.showEvent = async (req, res) => {
    const events = await eventSchema.findById(req.params.id);
    console.log("/id route", events);
    if (!events) {
        return res.redirect('/events');
    }
    res.render('showEvent', { events });
}