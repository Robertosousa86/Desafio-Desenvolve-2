const express = require('express');

const contactRouter = require('./contacts');

const router = express.Router();

router.use('/contact', contactRouter);

router.get('/', (req, res) => {
  res.send({
    firstServer: 'Only for test',
    Status: 'OK!',
  });
});

module.exports = router;
