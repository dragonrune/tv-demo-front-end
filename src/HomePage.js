import React, { Component } from 'react'
import NavSite from './NavSite'
import TVShow from './TVShow'
import './App.css'

class App extends Component {

  tvShowSelected = () => {
    return(console.log("TVShowSelected"))
  }

  tvShowDeleted = () => {
    return(console.log("TVShowDeleted"))
  }

  saveShow = () => {
    return(console.log("saveShow saved"))
  }

  render() {
    let buttonStyle = {
      borderRadius: '30px'
    }

    return (
      <div className="App">
        <header id="nav-bar">
          <NavSite />
        </header>
        <main>
          <section>
            <h1>Shows</h1>
            <div>
              <div>
                <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} Name="ST:TNG" allowDelete={true} buttonstyle={buttonStyle} />
              </div>
              <div>
                <TVShow selectHandler={this.tvShowSelected} deleteHandler={this.tvShowDeleted} Name="ST: Voyager" allowDelete={true} buttonstyle={buttonStyle} />
              </div>
              <div>
                {/* <button style={buttonStyle} onClick={this.clickedAdd()}>Add Show +</button> */}
                {/* this is the add show button */}
              </div>
            </div>
          </section>
          <section>
            <h1>New/Edit Show</h1>
            <div>
              <div>
                <label>Name: </label>
                {/* <input type="text" name="showname" /> */}
                <input type="text" name="showname" value="Show Name" />
              </div>
              <div>
                <label>Rating: </label>
                {/* <input type="text" name="showrating" /> */}
                <input type="text" name="showrating" value="Show Rating" />
              </div>
              <div>
                <label>Image URL: </label>
                {/* <input type="text" name="showimage" /> */}
                <input type="text" name="showimage" value="Image URL" />
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

export default App
