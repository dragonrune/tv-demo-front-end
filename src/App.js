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
    console.log(showToSave)
    this.setState({
      show: {
        name: showToSave.name,
        rating: showToSave.rating,
        imageURL: showToSave.imageURL
      }
    })
  }

  renderManagePage=()=>{
    return(<HomePage show={this.state.show} showDeleted={this.showDeleted} saveShow={this.saveShow} />)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.renderManagePage} />
          <Route path="/preview" component={PreviewPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
