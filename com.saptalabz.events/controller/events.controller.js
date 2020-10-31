module.exports = {

    getAllEvents: async (request, response) => {


        response.status(200).send("Adding Events to database.")

    },
    addingEvent: async (request, response) => {
        try {
           request.checkBody('title','Title Cannot be empty').notEmpty();
           
           var error=request.validationErrors();
           if(error){
            response.status(422).send("Adding Events to database." )
           }else{
            response.status(200).send("Adding Events to database." )
           }
            
        } catch (error){
            console.log(error);
            
            response.status(404).send("Failed to Add Events to database.")
        }
    },
    updateEvent: async (request, response) => {
        response.status(200).send("Adding Events to database." )
    }


}