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

  async get(req, res) {
    try {
      const contacts = await this.Contact.find({});

      if (!contacts.length)
        return res
          .status(400)
          .send({ message: 'A lista de contatos está vazia!' });

      return res.send({ contacts });
    } catch (err) {
      return res.send(err.message);
    }
  }

  async getById(req, res) {
    try {
      const contact = await this.Contact.findById(req.params.id);

      if (!contact)
        return res.status(400).send({ message: 'Não há contato com esse id!' });

      return res.send(contact);
    } catch (err) {
      return res.send(err.message);
    }
  }
}

module.exports = ContactController;
