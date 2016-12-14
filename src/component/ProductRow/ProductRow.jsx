import React, {Component} from 'react'
import './ProductRow.css'
class ProductRow extends Component {
  construct () {
  }
  render () {
    var data = this.props.data
    var dataList = data.map(function (data) {
      return (
        <li key={data.name}>
          <span className='s1'>{data.name}</span>
          <i className='s2'>{data.price}</i>
        </li>
      )
    }, this)
    return <ul className='dataList'>{dataList}</ul>
  }
}
export default ProductRow
