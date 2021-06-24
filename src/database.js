import mongoose from "mongoose";

mongoose.connect('mongodb://localhost/api-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error));