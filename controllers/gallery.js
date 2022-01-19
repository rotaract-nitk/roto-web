const gallerySchema = require('../models/gallerySchema');


module.exports.index = async (req, res) => {
    const gallery = await gallerySchema.find({});
    res.render('gallery', { gallery });
};