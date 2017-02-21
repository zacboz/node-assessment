const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const app = express();
const userCtrl = require('./userCtrl');
const port = 3070;

app.use(bodyParser.json());
// app.use(cors());

app.get('/api/users', (req, res) => {
  if(req.query.favorites){
    let favorite = userCtrl.getUsersByFavorite(str);
    res.status(200).json(favorite);
  } else if (req.query.age) {
    let ageLimit = userCtrl.getUsersByAgeLimit(age);
    res.status(200).json(ageLimit);
  } else if (req.query.last_name){
    let q = userCtrl.findUserByQuery(term, value);
    res.status(200).json(q);
  } else if (req.query.email) {
    let q = userCtrl.findUserByQuery(term, value);
    res.status(200).json(q);
  } else {
    let allUsers = userCtrl.readAll();
    res.status(200).json(allUsers);
  }
});

app.get('/api/users/:userId', (req, res) => {
  let one = userCtrl.findUserById(req.params.userId);
  res.status(200).json(one);
});

app.get('/api/admins', (req, res) => {
  let admins = userCtrl.getAdmins();
  res.status(200).json(admins);
});

app.get('/api/nonadmins', (req, res) => {
  let nonAdmin = userCtrl.getNonAdmins();
  res.status(200).json(nonAdmin);
});

app.post('/api/users', (req, res) => {
  let newUser = userCtrl.createUser(req.body);
  res.status(200).json(newUser);
});

app.put('/api/users/:userId', (req, res) => {
  let updatedUser = userCtrl.updateUser(req.params.userId, req.body);
  res.status(200).json(updatedUser);
});

app.delete('/api/users/:userId', (req, res) => {
  let getOuttaHere = userCtrl.removeUser(req.params.userId);
  res.status(200).json(getOuttaHere);
});




// app.listen(3070, () => {
//   console.log('Connected on port', port)
// });

module.exports = app;
