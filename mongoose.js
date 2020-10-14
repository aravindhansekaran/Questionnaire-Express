const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://<username>:<password>@questionnaire.jjkmu.mongodb.net/sample?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});

// const db = mongoose.connection

module.exports = { mongoose }
