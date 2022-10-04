import { Component } from "react";

export class Filter extends Component {

    render() {
      const {handleFinder} = this.props
        return (
          <>
          Find contacts by name 
              <input name="filter"  onChange={handleFinder}></input>
          </>

        )
    }
}