const express = require('express');
const app = express();



//Making Get Request  to fetch all events
app.get('/events', async (request, response) => {
    response.send("Getting All Events Registered.")
});

//Making Post Request to add events to database
app.post('/event/add', async (request, response) => {
    response.send("Adding Events to Database.")
});


//making Put request to update events to database
app.put('/events/update', async (request, response) => {
    response.send("Updating Events on to Database.")
});




//And finally listening to that particular server.
app.listen(3000, () => {
    console.log('Server is listening to port');

})