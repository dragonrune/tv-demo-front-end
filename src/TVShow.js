import React, { Component } from 'react'
// import './TVShow.css'

class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete)
            return (
                <button></button>
            )
    }

    render() {
        return (
            <div>
                <button>{this.props.Name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}

export default TVShow
