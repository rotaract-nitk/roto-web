const mongoose = require('mongoose');

// db schema - table in Db
const teamSchema = require('../models/teamSchema');

// List of members 
const members = require('./coreTeam');

// connect to db
mongoose.connect('mongodb+srv://venkatkumar1810:20011018@cluster0.kttig.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const seedDB = async () => {
    await teamSchema.deleteMany({});
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
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})