
module.exports = {

    getAllEvents: async (request, response) => {
        response.send("Getting All Events Registered.");
        response.status(200);
    },
    addingEvent: async (request, response) => {
        response.send("Adding events to Database.")
    },
    updateEvent: async (request, response) => {
        response.send("Updating events to Database.")
    }


}