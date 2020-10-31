module.exports = {

    async eventAddService(request) {
        try {
            let event = {
                "title": request.title,
                "description": request.description,
                "type": request.type,
                "location": request.location,
                "date": request.date
            }
            console.log(event);
            console.log("Event added...");

            return event;
        } catch (error) {
            return "event Add Service";
        }
    },
    async eventUpdateService(request) {
        try {
            let event = {
                "title": request.title,
                "description": request.description,
                "type": request.type,
                "location": request.location,
                "date": request.date
            }
            console.log(event);
            console.log("Event added...");
            
            return event;
        } catch (error) {
            return "event Add Service";
        }
    },

    async getAllEventsService(request) {
        try {
            let event = {
                "title": request.title,
                "description": request.description,
                "type": request.type,
                "location": request.location,
                "date": request.date
            }
            console.log(event);
            return event;
        } catch (error) {
            return "event Add Service";
        }
    }


}
