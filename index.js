const express = require('express')
const app = express()
const homeRouter = require(`${__dirname}/routes/homeRoutes`);

//settings
app.set('view engine','ejs');


//middlewares
app.use(express.static(__dirname + '/public'));


//routes
app.get('/',homeRouter);


app.listen(3000,() =>{
    console.log('Listening in port 3000...')
})