const moongoose = require('mongoose');
const { rejects } = require('assert');
const { request } = require('express');
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
                                reject({ message: 'Event Already Exist in our system.' })
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
                                        resolve({ message: 'Events Added successfully in our system.', data: data })

                                    }
                                ).catch(err => {
                                    reject({ message: 'Event Addition Failed in our system.', error: err })
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
    },
    updateEvent:async(request)=>{
        try {
            return new Promise((resolve,reject)=>{
                eventModel.findOneAndUpdate({'title':request.title},{
                    $set:{
                        'title':request.title,
                        'description':request.description,
                        'type':request.type,
                        'location':request.location,
                        'date':request.date

                    }
                })
                .then(
                    result=>{
                        if(result){
                            console.log(result);
                            resolve({ message: " Updated!", data: result });
                           
                        }else{
                           reject({message:'Event Not Found'})
                        }
                    }
                ).catch(err=>{
                    reject({message:err})
                })

            })
        } catch (error) {
            reject(error)
        }

    },
    deleteEvent:async(request)=>{
        
    }
     
}