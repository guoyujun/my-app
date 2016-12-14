import React, {Component} from 'react'
import './SearchBar.css'
class SearchBar extends Component {
  constructor (props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange () {
    this.props.onUserInput(this.filterTextInput.value)
  }
  render () {
    return (
      <div className='searchBar'>
        <input
          onChange={this.handleChange}
          value={this.props.filterText}
          className='searchBox'
          type='text'
          ref={(input) => (this.filterTextInput = input)}
          placeholder='Search...' />
      </div>
    )
  }
}
export default SearchBar
