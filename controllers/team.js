const teamSchema = require('../models/teamSchema');


module.exports.index = async (req, res) => {
    const teams = await teamSchema.find({});
    res.render('team', { teams });
}


