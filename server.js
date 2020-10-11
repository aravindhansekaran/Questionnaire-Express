const express = require('express')
const bodyParser = require('body-parser')

const {User} = require('./models/user')

const {questions} = require('./questionnaire')


const app = express()

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: true })

app.use(jsonParser)
app.use(urlencodedParser)

app.post('/api/signup',(req,res) => {
  // const newUser = 
  console.log(req.body.username)
  const user = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: req.body.password
  })
  // user.save().then(user => console.log(user)).catch((e) => res.status(400).json({'msg':'failure'}))
  // res.status(200).json({'msg':'success'})
  user.save((err,user) => {
    if(err){
      res.status(400).res.json({ 'msg': 'failure'})
    }else{
      res.status(200).json({ 'msg': 'success'})
    }
  })
})

app.post('/api/login',(req,res) => {
  User.findOne({username : req.body.username}, (err,user) => {
    if(err){
      console.log('one')
      console.log(err)
    }
    if(user && user.password === req.body.password){
      console.log('two')
      res.json({'msg' : 'user found'})
    }else{
      console.log('three')
      res.json({'data': 'login invalid'})
    }
  })
})

app.get('/api/questionsreal',urlencodedParser, (req,res) => {
  // const questions = questions;

  res.json(questions)
})

app.get('/api/users', (req, res) => {
  const questions = [
    {id: 1, firstName: 'Aravindhan', lastName: 'Chandrasekaran'},
    {id: 2, firstName: 'Bradley', lastName: 'Cooper'},
    {id: 3, firstName: 'Keanu', lastName: 'Reaves'},
  ];

  res.json(questions);
});

const port = 5000;

app.listen(port);