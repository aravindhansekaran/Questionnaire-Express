const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aravindh-22:aravindh@22@questionnaire.jjkmu.mongodb.net/sample?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});

// const db = mongoose.connection

module.exports = { mongoose }