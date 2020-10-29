const express = require('express');
const router = express.Router();



//Making Get Request  to fetch all events
router.get('/all', async (request, response) => {
    response.send("Getting All Events Registered.")
});

//Making Post Request to add events to database
router.post('/add', async (request, response) => {
    response.send("Adding Events to Database.")
});


//making Put request to update events to database
router.put('/update', async (request, response) => {
    response.send("Updating Events on to Database.")
});

module.exports=router;
