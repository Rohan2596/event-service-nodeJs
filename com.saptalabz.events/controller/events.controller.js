const { RSA_NO_PADDING } = require("constants");

const response = {
    success: "false",
    message: "Detail Empty",
}
module.exports = {

    getAllEvents: async (request, response) => {

        try {
            response.status(200).send("Adding Events to database.")
        } catch (error) {
            response.status(404).send("Failed to Add Events to database.")
        }

    },
    addingEvent: async (request, response) => {
        try {
            request.checkBody('title', 'Invalid Events Title!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('description', 'Invalid Events Description!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('type', 'Invalid Events Type!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('location', 'Invalid Events Location!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('date', 'Invalid Events date!').notEmpty().isAlpha().isLength({ min: '2' });


            let validationErrors = request.validationErrors();
            if (validationErrors) {
                response.status(500).send("Validation Errors..")
            } else {
                response.status(200).send("Adding Events to database.")

            }

        } catch (error) {
            console.log(error);

            response.status(404).send("Failed to Add Events to database.")
        }
    },
    updateEvent: async (request, response) => {
        try {
            request.checkBody('title', 'Invalid Events Title!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('description', 'Invalid Events Description!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('type', 'Invalid Events Type!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('location', 'Invalid Events Location!').notEmpty().isAlpha().isLength({ min: '2' });
            request.checkBody('date', 'Invalid Events date!').notEmpty().isAlpha().isLength({ min: '2' });


            let validationErrors = request.validationErrors();
            if (validationErrors) {
                response.status(500).send("Validation Errors..")
            } else {
                response.status(200).send("Updating  Events to database.")

            }

        } catch (error) {
            console.log(error);

            response.status(404).send("Failed to update Events to database.")
        }
    }


}