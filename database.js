const mongoose = require('mongoose');
const dbURL = 'mongodb://lowhanger:lowhanger_wiki_1@ds227654.mlab.com:27654/alternate';

mongoose.connect(dbURL, {useNewUrlParser: true}, err => {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to database!');
    }
});

module.exports = mongoose;
