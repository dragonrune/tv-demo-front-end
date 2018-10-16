import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import NavSite from './NavSite'
import TVShow from './TVShow'
// import './PreviewPage.css'

class PreviewPage extends Component {

    // static propTypes = {
    //     show: PropTypes.object.isRequired
    // }

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

    calcAvgRating = () => {
        if (!this.state.tvShows)
            return 0

        if (this.state.tvShows.length === 1)
            return this.state.tvShows[0].rating

        const totRating = this.state.tvShows.reduce(
            (totalRating, tvShow) => {
                return (totalRating.rating || totalRating) + tvShow.rating
            }
        )
        return Math.round((totRating / this.state.tvShows.length) * 100) / 100
    }

    renderTVShows = () => {
        if (this.state.tvShows) {
            const tvShow = this.state.tvShows.filter(
                (ratedlist) => {
                    return ratedlist.rating < 5
                }
            ).map((e,i) => {
                return (<TVShow key={i} name={e.name} selectHandler={this.tvShowSelected} />)
            })
            return tvShow
        }
    }

    tvShowSelected = () => {
        this.setState({
            selectedShow: this.state.selectedShow
        })
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
                        <h3>Avg Rating: {this.calcAvgRating()}</h3>
                        {this.renderTVShows()}
                    </section>
                    <section>
                        <div>
                            <h2>{this.state.selectedShow.name}</h2>
                            <h2>{this.state.selectedShow.rating}</h2>
                        </div>
                        <img src={this.state.selectedShow.imageURL} alt="Show Pic" />
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
