const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const teamSchema = require('./models/teamSchema');
const gallerySchema = require('./models/gallerySchema');
const ExpressError = require('./utils/ExpressError');


// import routes
const teamRoutes = require('./routes/team');
const galleryRoutes = require('./routes/gallery');

const app = express();

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect('mongodb+srv://rotoWebnitk:rotoWeb18@cluster0.hzgk8.mongodb.net/rotoWebsite?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use('/', teamRoutes);
app.use('/gallery', galleryRoutes);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
    // res.send("404! Page Not Found!");
});

//error handling
app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    // res.status(statusCode).send(message);
    if (!err.message) err.message = 'Something Went Wrong';
    res.status(statusCode).render('error', { err });
});

// driver 
app.listen(3000, () => {
    console.log('Serving On port 3000');
});
