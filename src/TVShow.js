import React, { Component } from 'react'
// import './TVShow.css'

class TVShow extends Component {
    renderDelete = () => {
        if (this.props.allowDelete)
            return (
                <button style={this.props.buttonstyle} onClick={this.props.deleteHandler}>Delete</button>
            )
    }

    render() {
        return (
            <div>
                <button style={this.props.buttonstyle} onClick={this.props.selectHandler}>{this.props.Name}</button>
                {this.renderDelete()}
            </div>
        )
    }
}

export default TVShow
