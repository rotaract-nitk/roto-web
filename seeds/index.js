const mongoose = require('mongoose');

// db schema - table in Db
const teamSchema = require('../models/teamSchema');
const gallerySchema = require('../models/gallerySchema');

// List of members 
const members = require('./coreTeam');
const pictures = require('./gallery');

// connect to db
mongoose.connect('mongodb+srv://rotoWebnitk:rotoWeb18@cluster0.hzgk8.mongodb.net/rotoWebsite?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    /*await teamSchema.deleteMany({});
    for (let i = 0; i < 16; i++) {
        const teamMember = new teamSchema({
            name: members[i].name,
            role: members[i].role,
            imageURL: members[i].imageURL,
            gmail: members[i].gmail,
            insta: members[i].insta,
            linkedIn: members[i].linkedIn
        })
        await teamMember.save();
    }*/

    await gallerySchema.deleteMany({});
    for(let i = 0; i < pictures.length; i++){
        const newPic = new gallerySchema({
            name: pictures[i].name,
            imageURL: pictures[i].imageURL
        })
        await newPic.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})