const express = require('express');
const router = express.Router();
const teamsController = require('../controllers/maincontroller');
const events = require('../controllers/event')

router.get('/', function(req, res) {
        teamsController(req,res);
    });
router.get('/events', function(req, res) {
        events.index(req,res);
    });
router.get('/events/:id', function(req, res) {
        
        events.showEvent(req,res);
    });

module.exports = router;