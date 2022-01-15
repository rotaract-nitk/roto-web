const express = require('express')

const app = express()

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home',{siteUrl : `${req.protocol}://${req.get('host')}${req.originalUrl}`});
  })


app.listen(3000,() =>{
    console.log('Listening in port 3000...')
})