import { Component } from "react";
import PropTypes from 'prop-types';

export class ContactsList extends Component {
    render() {
        const {contacts, deleteHandler} = this.props
        return (
            <ul>
                {contacts.map((contact) =>
                    (<li key={contact.id}>{contact.name}: {contact.number} <button type="submit" onClick={()=>{deleteHandler(contact.id)}}>Delete</button></li>))}
            </ul>
        )
    }
};

ContactsList.propTypes = {
    contacts: PropTypes.array,
    deleteHandler: PropTypes.func
}