const express = require('express');

const contactController = require('../controllers/contactController');

const router = express.Router();

router.use('/contact', contactController);

router.get('/', (req, res) => {
  res.send({
    firstServer: 'Only for test',
    Status: 'OK!',
  });
});

module.exports = router;
