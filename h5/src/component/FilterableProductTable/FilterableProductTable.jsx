import React, {Component} from 'react'
import SearchBar from '../SearchBar/SearchBar.jsx'
import ProductTable from '../ProductTable/ProductTable.jsx'
import './FilterableProductTable.css'
var data = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
]
class FilterableProductTable extends Component {
  constructor (props) {
    super(props)
    this.state = {filterText: ''}
    this.handleUserInput = this.handleUserInput.bind(this)
  }
  handleUserInput (filterText) {
    this.setState({
      filterText: filterText
    })
  }
  render () {
    return (
      <div className='filterableProductTable'>
        <SearchBar filterText={this.state.filterText} onUserInput={this.handleUserInput} />
        <ProductTable data={data} filterText={this.state.filterText} />
      </div>
    )
  }
}
export default FilterableProductTable
