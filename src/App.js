import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './HomePage'
import PreviewPage from './PreviewPage'
import './App.css'

class App extends Component {

  state = {
    selectedShow: {
      name: '',
      rating: '',
      imageURL: ''
    },
    show: {
      name: '',
      rating: '',
      imageURL: ''
    },
    tvShows: []
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

  saveTVShow = (showToSave) => {
    this.setState(
      (prevState) => ({
        tvShows: [...prevState.tvShows, {
          name: showToSave.name,
          rating: showToSave.rating,
          imageURL: showToSave.imageURL
        }]
      })
    )
  }

  renderManagePage = () => {
    return (<HomePage />)
  }

  renderPreviewPage = () => {
    // return (<PreviewPage selectedShow={this.state.show} />)
    return (<PreviewPage />)
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={this.renderManagePage} />
          <Route path="/preview" component={this.renderPreviewPage} />
        </Switch>
      </Router>
    )
  }
}

export default App
