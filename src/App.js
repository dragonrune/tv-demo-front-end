import React, { Component } from 'react'
import { BrowserRouter as Router,  Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import PreviewPage from './PreviewPage'
import './App.css'

class App extends Component {

  state = {
    show: {
      name: '',
      rating: '',
      ImageURL: ''
    }
  }

  tvShowDeleted = () => {
    this.setState({
      show: {
        name: '',
        rating: '',
        imageURL: ''
      }
    })
  }

  saveShow = (showToSave) => {
    this.setState({
      show: {
        name: showToSave.name,
        rating: showToSave.rating,
        imageURL: showToSave.imageURL
      }
    })
  }

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
