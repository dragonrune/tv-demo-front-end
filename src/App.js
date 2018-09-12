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
    console.log(showToSave)
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
    return (<HomePage tvShows={this.state.tvShows} tvShow={this.state.tvShow} showDeleted={this.tvShowDeleted} saveShow={this.saveTVShow} />)
  }

  renderPreviewPage = () => {
    console.log(this.state.show)
    return (<PreviewPage show={this.state.show} selectedShow={this.state.show} />)
  }

  render() {
    console.log(this.state)
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
