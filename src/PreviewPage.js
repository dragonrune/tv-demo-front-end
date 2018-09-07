import React, { Component } from 'react'
import NavSite from './NavSite'
import TVShow from './TVShow'
// import './PreviewPage.css'

class PreviewPage extends Component {
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
                        <TVShow Name="ST:TNG" buttonstyle={buttonStyle} />
                        <TVShow Name="ST:Voyager" buttonstyle={buttonStyle} />
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

export default PreviewPage
