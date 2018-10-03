import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import HomePage from './HomePage'
import PreviewPage from './PreviewPage'
import './App.css'

class App extends Component {

  static propTypes = {
    show: PropTypes.object.isRequired
  }

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
    return (<PreviewPage tvShows={this.state.tvShows} selectedShow={this.state.show} />)
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
