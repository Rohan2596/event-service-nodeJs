const express = require('express');
const app = express();

//Swagger Integration
const swaggerJsdoc=require('swagger-jsdoc');
const swaggerUi=require('swagger-ui-express');
const swaggerOptions={
    swaggerDefinition:{
        info:{
          title:"Events service API",
          description:"Events Api infromation",
          contact:{
              name:"Rohan Kadam"
          },
          server:["https://localhost:3000"]
        }
    },
    apis:["server.js"]
}
const swaggerDocs=swaggerJsdoc(swaggerOptions);
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));

const bodyparser=require('body-parser');

require('./com.saptalabz.events/configuration/database.connection')
app.use(bodyparser.json());
const expressValidator= require('express-validator');
app.use(expressValidator());

const eventsRoutes = require('./com.saptalabz.events/router/events.routes');
app.use('/events', eventsRoutes);
app.use(bodyparser.urlencoded({ extended: false }));
//And finally listening to that particular server.
app.listen(3000, () => {
    console.log('Server is listening to port');

})