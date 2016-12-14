import React, {Component} from 'react'
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow.jsx'
import ProductRow from '../ProductRow/ProductRow.jsx'
import './ProductTable.css'
class ProductTable extends Component {
  render () {
    var data = this.props.data
    var sData = []
    var eData = []
    for (var i = 0; i < data.length; i++) {
      if (data[i].name.indexOf(this.props.filterText) !== -1) {
        if (data[i].category === 'Sporting Goods') {
          sData.push(data[i])
        } else if (data[i].category === 'Electronics') {
          eData.push(data[i])
        }
      }
    }
    return (
      <div className='tableBox'>
        <h2>Name<span>Price</span></h2>
        <ProductCategoryRow name='Sporting Goods' data={sData} />
        <ProductRow data={sData} />
        <ProductCategoryRow name='Electronics' data={eData} />
        <ProductRow data={eData} />
      </div>
    )
  }
}
export default ProductTable
