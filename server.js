const app = require('express')();
const userCtrl = require('./userCtrl');

app.get('/api/users', (req, res) => {
  res.status(200).send(userCtrl.readAll());
})

app.listen(3000, () => {
  console.log('listening on 3000');
})

module.exports = app