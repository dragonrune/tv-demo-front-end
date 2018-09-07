import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavSite from './NavSite'
import TVShow from './TVShow'
// import './HomePage.css'

class HomePage extends Component {

  static propTypes={
    show: PropTypes.object.isRequired,
    showDeleted: PropTypes.func.isRequired,
    saveShow: PropTypes.func.isRequired
  }

  state = {
    buttonStyle: {
      borderRadius: '30px'
    },
    nameInProgress: '',
    ratingInProgress: '',
    imageURLInProgress: ''
  }

  handleNameChange = (event) => {
    this.setState({
      nameInProgress: event.target.value
    })
  }

  handleRatingChange = (event) => {
    this.setState({
      ratingInProgress: event.target.value
    })
  }

  handleImageURLChange = (event) => {
    this.setState({
      imageURLInProgress: event.target.value
    })
  }

  tvShowSelected = () => {
    this.setState({
      nameInProgress: this.props.show.name,
      ratingInProgress: this.props.show.rating,
      imageURLInProgress: this.props.show.imageURL
    })
    // return(console.log(this.props.show))
  }

  tvShowDeleted = () => {
    this.props.showDeleted()
  }

  saveShow = () => {
    this.props.saveShow({
      name: this.state.nameInProgress,
      rating: this.state.ratingInProgress,
      imageURL: this.state.imageURLInProgress
    })

    this.setState({
      nameInProgress: '',
      ratingInProgress: '',
      imageURLInProgress: ''
    })
}

  renderShows = () => {
    return <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} name={this.props.show.name} allowDelete={true} buttonstyle={this.state.buttonStyle} />
  }

  render() {
    return (
      <div className="App">
        <header id="nav-bar">
          <NavSite />
        </header>
        <main>
          <section>
            <h1>Shows</h1>
            {this.renderShows()}
          </section>
          <section>
            <h1>New/Edit Show</h1>
            <div>
              <div>
                <label>Name: </label>
                <input type="text" name="showname" value={this.state.nameInProgress} onChange={this.handleNameChange} />
              </div>
              <div>
                <label>Rating: </label>
                <input type="text" name="showrating" value={this.state.ratingInProgress} onChange={this.handleRatingChange} />
              </div>
              <div>
                <label>Image URL: </label>
                <input type="text" name="showimage" value={this.state.imageURLInProgress} onChange={this.handleImageURLChange} />
              </div>
              <div>
                <button onClick={this.saveShow}>Create/Update</button>
              </div>
            </div>
          </section>
        </main>
        <footer>
          <p>
            &copy; Ken Mason 2018
          </p>
        </footer>
      </div>
    )
  }
}

export default HomePage
