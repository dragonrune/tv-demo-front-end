import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NavSite from './NavSite'
import TVShow from './TVShow'
// import './PreviewPage.css'

class PreviewPage extends Component {

    static propTypes = {
        tvShows: PropTypes.array.isRequired,
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

    calcAvgRating = () => {
        if (this.props.tvShows.length === 0)
            return 0

        if (this.props.tvShows.length === 1)
            return this.props.tvShows[0].rating

        const totRating = this.props.tvShows.reduce(
            (totalRating, tvShow) => {
                return (totalRating.rating || totalRating) + tvShow.rating
            }
        )
        return Math.round((totRating / this.props.tvShows.length) * 100) / 100
    }

    renderTVShows = () => {
        const tvShow=this.props.tvShows.filter (
            (ratedlist) => {
                return ratedlist.rating < 5
            }
        ).map ((e) => {
            return (<TVShow name={e.name} selectHandler={this.showSelected} />)
        })

        return tvShow
    }

    showSelected = () => {
        this.setState({
            selectedShow: this.props.selectedShow
        })
    }

    render() {
        console.log(this.renderTVShows)
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
