const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');



// import routes
const homePageRoutes = require('./routes/mainroute');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb+srv://rotoWebnitk:rotoWeb18@cluster0.hzgk8.mongodb.net/rotoWebsite?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});



const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.use('/', homePageRoutes);


app.listen(3000, () => {
    console.log('Serving On port 3000');
});
