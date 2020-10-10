const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://aravindh-22:aravindh@22@questionnaire.jjkmu.mongodb.net/questionnaire?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true});

module.exports = { mongoose }