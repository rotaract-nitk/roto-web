const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Roto-Web')
  })

app.listen(3000,() =>{
    console.log('Listening in port 3000...')
})