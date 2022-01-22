const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/maincontroller');

 router.get('/', function(req, res) {
        teamsController(req,res);
    });

module.exports = router;