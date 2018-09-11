import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavSite from './NavSite'
import TVShow from './TVShow'
// import './PreviewPage.css'

class PreviewPage extends Component {

    static propTypes = {
        show: PropTypes.object.isRequired
    }

    state = {
        buttonStyle: {
            borderRadius: '30px'
        },
        selectedShow: {
            name: '',
            rating: '',
            imageURL: ''
        }
    }

    renderShows=()=>{
        return (<TVShow name={this.props.selectedShow.name} selectHandler={this.showSelected} />)
    }

    showSelected = () => {
        this.setState ({
            selectedShow: this.props.selectedShow
        })
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
