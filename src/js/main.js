class Contact {
  constructor(name, phone, id) {
    this.name = name;
    this.phone = phone;
    this.id = id;
  }
}

const contactList = [];

const createList = (name, phone) => {
  const item = document.createElement('ul');
  item.classList.add('contact-list');

  item.innerHTML = `
  <li>${name} ${phone}<button>Excluir</button></li>
     
      `;

  document.getElementById('contacts').appendChild(item);
};

const createContact = () => {
  const contact = new Contact();

  contact.name = document.getElementById('name').value;
  contact.phone = document.getElementById('phone').value;
  if (!contact.name || !contact.phone)
    return alert('Por favor, preencha todos os campos.');

  const number = document.getElementById('phone').value;

  const numberFound = contactList.find((contact) => {
    if (contact.phone === number) return true;
  });

  if (numberFound)
    return alert(`O número ${contact.phone} já consta na lista de contatos.`);

  for (let index = 10; index < contactList.length; index++) {
    contact.id = contactList[index];
  }

  contactList.push(contact);

  createList(contact.name, contact.phone);

  console.log(contact);
  document.getElementById('name').value = '';
  document.getElementById('phone').value = '';
};

const input = document.querySelector('[data-js="input"]');
input.addEventListener('input', handleInput, false);

function handleInput(e) {
  e.target.value = phoneMask(e.target.value);
}

const phoneMask = (phone) => {
  return phone
    .replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{5})\d+?$/, '$1');
};
