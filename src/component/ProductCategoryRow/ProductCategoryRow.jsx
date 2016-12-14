import React, {Component} from 'react'
import './ProductCategoryRow.css'
class ProductCategoryRow extends Component {
  render () {
    if (this.props.data.length >= 1) {
      return (
        <h3 className='catrgoryName'>{this.props.name}</h3>
      )
    } else {
      return (
        <h3 />
      )
    }
  }
}
export default ProductCategoryRow
