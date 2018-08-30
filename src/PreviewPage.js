import React, { Component } from 'react'
import NavSite from './NavSite'
import './App.css'

class App extends Component {
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
                        <button style={buttonStyle} onclick="clickedSubmit()">Show 1</button>
                        <button style={buttonStyle} onclick="clickedSubmit()">Show 2</button>
                    </section>
                    <section>
                        <div>
                            <h2>Show 1</h2>
                            <h2>PG</h2>
                        </div>
                        <img src="./bleach-hero.jpg" alt="Bleach Anime"/>
                    </section>
                </main>
                <footer>
                    <p> &copy; Ken Mason 2018 </p>
                </footer>
            </div>
        )
    }
}

export default App
