const router = require('express').Router();

router.post('/', (req, res) => {
  console.log(req.body);
  res.status(200).json(req.body);
});

module.exports = router;
