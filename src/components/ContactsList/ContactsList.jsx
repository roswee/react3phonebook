import { Component } from "react";

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
}