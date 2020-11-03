const moongoose = require('mongoose');
const { rejects } = require('assert');
const eventSchema = new moongoose.Schema({
    'title': {
        type: String,
        required: true
    },
    'description': {
        type: String,
        required: true

    },
    'type': {
        type: String,
        required: true
    },
    'location': {
        type: String,
        required: true
    },

    'date': {
        type: String,
        required: true

    },


}, {
    timestamps: true
}
)
const eventModel = moongoose.model('event', eventSchema)
module.exports = {
    eventObject: async (result) => {
        return {
            "_id": result._id,
            "title": result.title,
            "description": result.description,
            "type": result.type,
            "location": result.location,
            "date": result.date
        }
    },
    addEvent: async (request) => {
        try {
            console.log(request);

            return new Promise((resolve, reject) => {
                eventModel.findOne({ 'title': request.title })
                    .then(
                        result => {
                            if (result) {
                                reject({ message: 'Event Already Exist' })
                            } else {
                                console.log(result);

                                var event = new eventModel({
                                    title: request.title,
                                    description: request.description,
                                    type: request.type,
                                    location: request.location,
                                    date: request.date

                                });
                                event.save().then(
                                    result => {
                                        resolve({ message: 'Regisration successfull!', data: data })

                                    }
                                ).catch(err => {
                                    reject({ message: 'Event Addition Failed!', error: err })
                                });
                            }
                        }
                    ).catch(err => {
                        console.log(err);

                    });
            })
        } catch (error) {
            reject(error);
        }

    },
    getAllEvents: async () => {
        try {
            return new Promise((resolve, reject) => {
                eventModel.find().then(
                    result => {
                        if (result) {
                            console.log("Events Are:- ", result);
                            resolve({ message: "Events Founds" ,data:result})

                        } else {
                            reject({ message: 'No Events recieved.' })

                        }
                    }
                ).catch(err => {
                    console.log(err);

                });
            })
        } catch (error) {
            console.log(error);

        }
    }

}