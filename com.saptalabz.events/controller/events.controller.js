var EventDto = require('../dto/event.dto')
module.exports = {

    getAllEvents: async (request, response) => {


        response.status(200).send("Adding Events to database.")

    },
    addingEvent: async (request, response) => {
        try {
            var eventDto =new EventDto({
                title: request.body.title,
                description: request.body.description,
                type: request.body.type,
                location: request.body.location,
                date: request.body.date
            });
        await  console.log(request.body.title);
           
            response.status(200).send("Adding Events to database." )
        } catch (error){
            console.log(error);
            
            response.status(404).send("Failed to Add Events to database.")
        }
    },
    updateEvent: async (request, response) => {
        response.status(200).send("Adding Events to database." )
    }


}