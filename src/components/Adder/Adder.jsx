import { Component } from "react";

export class Adder extends Component {
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        form.reset();
    }
    render() {
    return (
    <>
    <form onSubmit={this.handleSubmit()}>
        <label>
            Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
                <button type="submit">Add contact</button>
        </label>
    </form>
    </>
)}
    }