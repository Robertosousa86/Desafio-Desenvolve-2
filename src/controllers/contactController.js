class ContactController {
  constructor(Contact) {
    this.Contact = Contact;
  }

  async create(req, res) {
    try {
      const contact = new this.Contact(req.body);

      if (await this.Contact.findOne({ name: req.body.name }))
        return res.status(400).send({ Message: 'Contato já cadastrado.' });

      await contact.save();

      return res.status(201).send({ contact });
    } catch (error) {
      return res.status(400);
    }
  }
}

module.exports = ContactController;
