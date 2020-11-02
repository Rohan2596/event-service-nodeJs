const moongoose = require('mongoose');
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
const event=moongoose.model('event',eventSchema)
module.exports={
     eventObject:async (result)=>{
        return{
          "_id":result._id,
          "title":result.title,
          "description":result.description,
          "type":result.type,
          "location":result.location,
          "date":result.date
        }
    },
    addEvent:async(request)=>{
        try {
            return new Promise((resolve,reject)=>{
                event.findOne({'title':request.title})
                .then(
                    result=>{
                        if(result){
                            reject({message:'Event Already Exist'})
                        }else{
                            let event=new event(request);
                            event.save().then(
                                result=>{
                                  let data={
                                    "title":result.title,
                                    "description":result.description,
                                    "type":result.type,
                                    "location":result.location,
                                    "date":result.date 
                                  }
                                }
                            ).catch(err=>{
                                reject({message:'Event Addition Failed!',error:err})
                            });
                        }
                    }
                ).catch(err=>{
                   console.log(err);
                    
                });
            })
        } catch (error) {
            reject(error);
        }
    }
}