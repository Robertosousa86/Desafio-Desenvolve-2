const express = require('express');

const Contact = require('../models/contacts');
const ContactController = require('../controllers/contactController');

const router = express.Router(Contact);

const contactController = new ContactController(Contact);

router.post('/', (req, res) => contactController.create(req, res));
router.get('/', (req, res) => contactController.get(req, res));

module.exports = router;
