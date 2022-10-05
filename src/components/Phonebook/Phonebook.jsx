import { Component } from 'react';
import { Adder } from 'components/Adder/Adder';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';


export class Phonebook extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts')
    const userContacts = JSON.parse(contacts);
    if (userContacts !== null) {
      this.setState({contacts: userContacts})
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }

  componentWillUnmount(id) {
    localStorage.removeItem(id)
  }

  contactSubmit = values => {
    const { contacts } = this.state;
    const nameArray = contacts.map(contact => {
      return contact.name;
    });
    if (nameArray.includes(values.name)) {
      return alert(`${values.name} is already in contacts.`);
    }
    return this.setState(({ contacts }) => ({
      contacts: [values, ...contacts],
    }));
  };

  filteredValues = evt => {
    const { filter, contacts } = this.state;
    if (filter === '') {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  filterSubmit = filterValue => {
    this.setState({ filter: filterValue });
  };

  handleFinder = evt => {
    this.setState({ filter: evt.target.value });
  };

  deleteHandler = id => {
    this.componentWillUnmount(id);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <Adder onSubmit={this.contactSubmit} />
        <Filter handleFinder={this.handleFinder} />
        <ContactsList
          contacts={this.filteredValues()}
          deleteHandler={this.deleteHandler}
        />
      </>
    );
  }
}