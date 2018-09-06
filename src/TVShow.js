import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TVShow extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        allowDelete: PropTypes.bool,
        selectHandler: PropTypes.func.isRequired,
        deleteHandler: PropTypes.func
    }

    renderDelete = () => {
        if (this.props.allowDelete === true)
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
