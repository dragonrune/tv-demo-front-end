import React, { Component } from 'react'
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import PreviewPage from './PreviewPage'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/preview" component={PreviewPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
