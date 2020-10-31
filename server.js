const express = require('express');
const app = express();

const bodyparser=require('body-parser');


app.use(bodyparser.json());
const expressValidator= require('express-validator');
app.use(expressValidator());

const eventsRoutes = require('./com.saptalabz.events/router/events.routes');

//Creating Routes for events 
app.use('/events', eventsRoutes);
app.use(bodyparser.urlencoded({ extended: false }));
//And finally listening to that particular server.
app.listen(3000, () => {
    console.log('Server is listening to port');

})