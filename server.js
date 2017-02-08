const app = require('express')();
const userCtrl = require('./userCtrl');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/api/users', (req, res) => {
  res.status(200).send(userCtrl.readAll());
})

app.get('/api/users/:id', (req, res) => {
  let id = Number(req.params.id)
  res.status(200).send(userCtrl.findUserById(id))
})

app.get('/api/admins', (req, res) => {
  res.status(200).send(userCtrl.getAdmins())
})

app.get('/api/nonadmins', (req, res) => {
  res.status(200).send(userCtrl.getNonAdmins())
})

app.put('/api/users/:id', (req, res) => {
  let id = Number(req.params.id)
  res.status(200).send(userCtrl.updateUser(id, req.body))
})

app.post('/api/users', (req, res) => {
  res.status(200).send(userCtrl.createUser(req.body))
})

app.delete('/api/users/:id', (req, res) => {
  let id = Number(req.params.id);
  res.status(200).send(userCtrl.removeUser(id));
})

app.listen(3000, () => {
  console.log('listening on 3000');
})

module.exports = app
