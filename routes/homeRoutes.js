const express = require('express');

const social = [
    {url: "https://www.facebook.com/RotaractClubNITK/",
    icon: "fa fa-facebook"},
    {url: "https://www.linkedin.com/company/rotaract-club-nitk-chapter/",
      icon: "fa fa-linkedin"},
    {url: "https://www.youtube.com/channel/UChDkd089CGeiYpAySOdcE0A",
    icon: "fa fa-youtube"},
    {url: "https://www.instagram.com/rotaract_nitk/",
    icon: "fa fa-instagram"}
]

// siteUrl : `${req.protocol}://${req.get('host')}${req.originalUrl}`

const router = express.Router();

router.get('',(req,res)=>{
    const siteUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    res.render('home',{
        siteData : {social : social,siteUrl : siteUrl,}
    })
})

module.exports = router;