const express = require('express');
const app = express();


const eventsRoutes = require('./com.saptalabz.events/router/events.routes');

//Creating Routes for events 
app.use('/events', eventsRoutes);


//And finally listening to that particular server.
app.listen(3000, () => {
    console.log('Server is listening to port');

})