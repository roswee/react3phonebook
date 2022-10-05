import { Component } from "react";
import PropTypes from 'prop-types'

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

Filter.propTypes = {
  handleFinder: PropTypes.func
}