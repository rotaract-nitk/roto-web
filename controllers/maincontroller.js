const teamSchema = require('../models/teamSchema');
const gallerySchema = require('../models/gallerySchema');
const eventSchema = require('../models/eventSchema')
const social = require('../public/js/socials')


module.exports = async (req,res) => {
    const siteUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    const teams = await teamSchema.find({});
    const gallery = await gallerySchema.find({});
    const events = await eventSchema.find({});


    res.render('home',{ siteData : {social : social,siteUrl : siteUrl,teams:teams,gallery:gallery,events:events}});
}

