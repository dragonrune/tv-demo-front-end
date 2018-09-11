import React, { Component } from 'react'
import NavSite from './NavSite'
import TVShow from './TVShow'
// import './PreviewPage.css'

class PreviewPage extends Component {

    state = {
        buttonStyle: {
            borderRadius: '30px'
        },
        selectedShow: {
            name: this.props.show.name,
            rating: this.props.show.rating,
            imageURL: this.props.show.imageURL
        }
    }

    renderShows=()=>{
        return (<TVShow name={this.state.selectedShow.name} selectHandler={this.props.show.showSelected} />)
    }

    render() {
        console.log(this.state.show)
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
                        <div>
                            <h2>{this.state.selectedShow.name}</h2>
                            <h2>{this.state.selectedShow.rating}</h2>
                        </div>
                        <img src={this.state.selectedShow.imageURL} alt="Show Pic"/>
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
