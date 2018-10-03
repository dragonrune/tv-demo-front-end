import React, { Component } from 'react'
import NavSite from './NavSite'
import TVShow from './TVShow'

class HomePage extends Component {

  state = {
    buttonStyle: {
      borderRadius: '30px'
    },
    name: '',
    rating: '',
    imageURL: ''
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleRatingChange = (event) => {
    this.setState({
      rating: event.target.value
    })
  }

  handleImageURLChange = (event) => {
    this.setState({
      imageURL: event.target.value
    })
  }

  async componentDidMount() {
    // GET -- grab list of TVShow from API
    try {
      const r = await fetch('http://localhost:3030/shows', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const tvShows = await r.json()
      this.setState({ tvShows })
    } catch (error) {
      return (this.setState({ errormessage: "Error- What the #$%^ did you do ?!" }))
    }
  }

  async postData () {
    try {
      const r= await fetch('http://localhost:3030/shows', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: this.state.name,
          rating: this.state.rating,
          imageURL: this.state.imageURL
        })
      })
      const tvShows = await r.json()
      this.setState({ tvShows })
    } catch (error) {
        return (this.setState({ errormessage: "Error- What the #$%^ did you do ?!" }))
    }
  }

  saveShow = () => {

    this.postData()

    this.setState({
      name: '',
      rating: '',
      imageURL: ''
    })
  }

  renderTVShows = () => {
    if (this.state.tvShows) {
      const tvShow = this.state.tvShows.map(
        (n, i) => {
          return (<TVShow key={i} name={n.name}
            allowDelete={true}
            selectHandler={this.tvShowSelected}
            deleteHandler={this.tvShowDeleted}
            buttonstyle={this.state.buttonStyle} />
          )
        }
      )
      return tvShow
    }
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
            {this.renderTVShows()}
          </section>
          <section>
            <h1>New/Edit Show</h1>
            <div>
              <div>
                <label>Name: </label>
                <input type="text" name="showname" value={this.state.name} onChange={this.handleNameChange} />
              </div>
              <div>
                <label>Rating: </label>
                <input type="text" name="showrating" value={this.state.rating} onChange={this.handleRatingChange} />
              </div>
              <div>
                <label>Image URL: </label>
                <input type="text" name="showimage" value={this.state.imageURL} onChange={this.handleImageURLChange} />
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
