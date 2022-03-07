const express = require('express');

const Contact = require('../models/contacts');
const ContactController = require('../controllers/contactController');

const router = express.Router(Contact);

const contactController = new ContactController(Contact);

router.get('/', (req, res) => contactController.create(req, res));

module.exports = router;
