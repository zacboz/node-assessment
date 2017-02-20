const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const userCtrl = require('./userCtrl');
const port = 3070;

app.use(bodyParser.json());
app.use(cors());

app.get('/api/users', (req, res) => {
  if (req.query.favorites){
    let fav = userCtrl.getUsersByFavorite(favorite);
    res.status(200).json(fav);
  } else if (req.query.age) {
    let ageLimit = userCtrl.getUsersByAgeLimit(age);
    res.status(200).json(ageLimit);
  } else if (req.query.email) {
    let arr = userCtrl.findUserByQuery(query, value);
    res.status(200).json(arr)
  } else {
    let all = userCtrl.readAll();
    res.status(200).json(all);
  }
});

app.get('/api/users/:userId', (req, res) => {
  let one = userCtrl.findUserById(req.params.userId);
  if (one == null) {
    res.status(404).json('Not Found');
  } else {
    res.status(200).json(one);
  }
});

app.get('/api/admins', (req, res) => {
  let allAdmin = userCtrl.getAdmins();
  res.status(200).json(allAdmin);
});

app.get('/api/nonadmins', (req, res) => {
  let nonAdmin = userCtrl.getNonAdmins();
  res.status(200).json(nonAdmin);
});

app.put('/api/users/:userId', (req, res) => {
  let user = userCtrl.updateUser(req.params.userId, req.body);
  return res.status(200).json(user);
});

app.post('/api/users', (req, res) => {
  let newUser = userCtrl.createUser(req.body);
  return res.status(200).json(newUser);
});

app.delete('/api/users/:userId', (req, res) => {
  let remove = userCtrl.removeUser(req.params.userId);
  res.status(200).json(remove);
});







// app.listen(3070, () => {
//   console.log('Connected on port', port)
// });

module.exports = app;
