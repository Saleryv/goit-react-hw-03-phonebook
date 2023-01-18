import { Component } from 'react';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import css from './App.module.css';

const CONTACTS_KEY = 'contacts'

export class App extends Component {
  state = {
    contacts: [
      // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

//*===================== Homework 3 =====================

componentDidMount(){
  const localContacts = localStorage.getItem(CONTACTS_KEY);
  const parcedContacts = JSON.parse(localContacts);
  if(parcedContacts){
    this.setState({contacts:parcedContacts});
  }

}

componentDidUpdate(_, prevState){
  if(prevState.contacts !== this.state.contacts){
    localStorage.setItem(CONTACTS_KEY, JSON.stringify(this.state.contacts));
  }
}

//*===================== Homework 3 =====================
  contactAdd = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    const contactForm = this.state.contacts.filter(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (contactForm.length) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  onChange = e => {
    this.setState({ filter: e.target.value });
  };

contactDelete = contactId => {
    this.setState({
      contacts: this.state.contacts.filter(el => el.id !== contactId),
    });
  };

  render() {
    const { filter } = this.state;
    const filterContact = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.app}>
        <h1>Phonebook</h1>
          <ContactForm contactAdd={this.contactAdd} />
          <h2>Contacts</h2>
          <Filter filter={filter} onChange={this.onChange} />
          <ContactList
            contacts={filterContact}
            contactDelete={this.contactDelete}
          />
      </div>
    );
  }
}
