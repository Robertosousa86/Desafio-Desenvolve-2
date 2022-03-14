class ContactController {
  constructor(Contact) {
    this.Contact = Contact;
  }

  async create(req, res) {
    try {
      const contact = new this.Contact(req.body);
      // todas as condições devem ser feitas aqui? como por exemplo name vazio?
      if (await this.Contact.findOne({ name: contact.name }))
        return res.status(400).send({ Message: 'Contato já cadastrado.' });

      if (await this.Contact.findOne({ telephone: contact.telephone }))
        return res
          .status(400)
          .send({ Message: 'Número de telefone já cadastrado.' });

      await contact.save();

      return res.status(201).send({ contact });
    } catch (err) {
      return res.send(err.message);
    }
  }

  async get(req, res) {
    try {
      const contacts = await this.Contact.find({});

      if (!contacts.length)
        return res
          .status(400)
          .send({ message: 'A lista de contatos está vazia!' });

      return res.status(200).send({ contacts });
    } catch (err) {
      return res.send(err.message);
    }
  }

  async getById(req, res) {
    try {
      const contact = await this.Contact.findById(req.params.id);

      if (!contact)
        return res.status(400).send({ message: 'Não há contato com esse id!' });

      return res.status(200).send(contact);
    } catch (err) {
      return res.send(err.message);
    }
  }

  async update(req, res) {
    try {
      const contact = await this.Contact.updateOne(
        { _id: req.params.id },
        req.body
      );

      if (!contact.matchedCount)
        return res
          .status(400)
          .send({ message: 'Não há contato salvo com esse id!' });
      res
        .status(200)
        .send({ message: 'Dados do contato atualizados com sucesso!' });
    } catch (err) {
      return res.send(err.message);
    }
  }

  async remove(req, res) {
    const contact = await this.Contact.findByIdAndRemove({
      _id: req.params.id,
    });

    if (!contact)
      return res
        .status(400)
        .send({ message: 'Não há contato cadastrado com esse id!' });

    return res.status(200).send({ message: 'Contato deletado com sucesso!' });
  }
  catch(err) {
    return res.send(err.message);
  }
}

module.exports = ContactController;
