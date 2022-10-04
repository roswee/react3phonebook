import { Component } from "react";
import { nanoid } from "nanoid";

export class Adder extends Component {
    handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        const id = nanoid();
        this.props.onSubmit({ name, number, id });
        form.reset();
      };
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label> Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            </label>
            <label> Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            </label>
            <button type="submit">Add contact</button>
          </form>
        );
      }
    }