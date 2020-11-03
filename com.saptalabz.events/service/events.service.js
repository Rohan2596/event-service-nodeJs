
const eventModel = require('../model/event.model');
const { error } = require('console');
module.exports = {

    eventAddService: async (event) => {
        try {
         
            console.log("Events in Servce: ",event);
            console.log("Event added...");
            return eventModel.addEvent(event).then((data)=>{
                return data;
            }).catch((error)=>{
                return error;
            })

        } catch (error) {
            console.log("***********",error);
            
            return error;
        }
    },
    async eventUpdateService(request) {
        try {
            let event = {
                'title': request.title,
                'description': request.description,
                'type': request.type,
                'location': request.location,
                'date': request.date
            }
            console.log(event);
            console.log("Event added...");

            return event;
        } catch (error) {
            return "event Add Service";
        }
    },

    async getAllEventsService() {
        try {
            return eventModel.getAllEvents().then((data)=>{
                return data;
            }).catch((error)=>{
                return error;
            })
        } catch (error) {
            return "event Add Service";
        }
    }


}
