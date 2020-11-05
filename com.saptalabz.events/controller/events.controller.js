
const userService = require('../service/events.service')
const response = {
    success: "false",
    message: "Detail Empty",
}
module.exports = {

    getAllEvents: async (request, response) => {

        try {

            userService.getAllEventsService().then((data) => {
                response.status(200).send(data);
            })

        } catch (error) {
            response.status(404).send("Failed to Add Events to database.")
        }

    },
    addingEvent: async (request, response) => {
        try {
            request.checkBody('title', 'Invalid Events Title!').notEmpty().isLength({ min: '2' });
            request.checkBody('description', 'Invalid Events Description!').notEmpty().isLength({ min: '2' });
            request.checkBody('type', 'Invalid Events Type!').notEmpty().isLength({ min: '2' });
            request.checkBody('location', 'Invalid Events Location!').notEmpty().isLength({ min: '2' });
            request.checkBody('date', 'Invalid Events date!').notEmpty().isLength({ min: '2' });


            let validationErrors = request.validationErrors();
            if (validationErrors) {
                response.status(500).send("Validation Errors..")
            } else {
                var event = {
                    "title": request.body.title,
                    "description": request.body.description,
                    "type": request.body.type,
                    "location": request.body.location,
                    "date": request.body.date
                }
                userService.eventAddService(event).then((data) => {
                    console.log(data.toString());

                    response.status(200).send("Adding Events to database.");

                }).catch((err) => {
                    console.log(err);
                })

            }

        } catch (error) {
            console.log(error);

            response.status(404).send("Failed to Add Events to database.")
        }
    },
    updateEvent: async (request, response) => {
        try {
            request.checkBody('title', 'Invalid Events Title!').notEmpty().isLength({ min: '2' });
            request.checkBody('description', 'Invalid Events Description!').notEmpty().isLength({ min: '2' });
            request.checkBody('type', 'Invalid Events Type!').notEmpty().isLength({ min: '2' });
            request.checkBody('location', 'Invalid Events Location!').notEmpty().isLength({ min: '2' });
            request.checkBody('date', 'Invalid Events date!').notEmpty().isLength({ min: '2' });


            let validationErrors = request.validationErrors();
            if (validationErrors) {
                response.status(500).send("Validation Errors..")
            } else {
                userService.eventUpdateService(request.body).then((data) => {
                    console.log(data.toString());

                    response.status(200).send("Updating Events to database.");

                }).catch((err) => {
                    console.log(err);
                })

            }

        } catch (error) {
            console.log(error);

            response.status(404).send("Failed to update Events to database.")
        }
    },
    deleteEvent: async (request, response) => {
        try {

            const id = request.param('title');
            if (id != null) {

                response.status(404).send("Id is null.")
            } else {
                userService.deleteEventService(id).then(()=>{
                    response.status(200).send("DELETED successfully.");

                }).catch((err)=>{
                    response.status(404).send("Failed to update Events to database.")   
                })
            }

            response.status(200).send("event delete successfully")

        } catch (error) {
            response.status(404).send("Event Failed to delete.")
        }
    }


}