import React, {Component} from 'react'
import {Router, Route, hashHistory} from 'react-router'
import FilterableProductTable from './component/FilterableProductTable/FilterableProductTable'

class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={FilterableProductTable} />
        <Route path='/all' component={FilterableProductTable} />
      </Router>
    )
  }
}

export default App
