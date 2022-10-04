import { Component } from "react";
import { Adder } from "components/Adder/Adder";

export class Phonebook extends Component {
    state = {
        contacts: [],
        name: ''
      };

      render() {
        return (
            <>
            <Adder />
            </>
        )
      }
}