const router = require('express').Router();

const server = require('./../../package.json');

router.get('/api/home',(req, res) => {
  const data = {
    name: 'Fahad Hossain',
    email: 'fahadh821@hmail.com',
    phone: '+8801738817809'
  }
  res.status(200).json(server);
});

module.exports = router;
