const express = require('express');
const router = express.Router();

const eventController = require('../controller/events.controller')


//Making Get Request  to fetch all events
router.get('/all', eventController.getAllEvents);

//Making Post Request to add events to database
router.post('/add', eventController.addingEvent);


//making Put request to update events to database
router.put('/update', eventController.updateEvent);

module.exports = router;
