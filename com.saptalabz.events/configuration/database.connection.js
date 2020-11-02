const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/myDb',
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.log("SuccessFully connected to the database");

    }).catch(err => {
        console.log('Counld Not connect to the database.Existing now..', err);
        process.exit();
    })