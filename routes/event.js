const express = require('express');
const router = express.Router();
const eventSchema = require('../models/eventSchema');
const events = require('../controllers/event');
const catchAsync = require('../utils/catchAsync');



// this route is for
// .display all team members
// .if added new team member POST req
router.route('/')
    .get(catchAsync(events.index))
// .post() complete this post request



// this route is to add new member i.e through form --- complete this route
// router.get('/new', isLoggedIn, teams.renderNewForm) 


// this route is for
// display each team member at a time - if needed can be removed - get req
// if updated a team member details sent - put req
// to delete a team member - delete req

router.route('/:id')
    .get(catchAsync(events.showEvent))
// .put()
// .delete

// to update a team member - get req

// router.get(':/id/edit', isLoggedIn, catchAsync(teams.renderEditForm));

module.exports = router;