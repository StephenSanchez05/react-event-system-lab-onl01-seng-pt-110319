import React, { Component } from 'react';
export default class EyesOnMe extends Component {

    eyes = () => {
        console.log("Good!")
    }

    blur = () => {
        console.log("Hey! Eyes on me!")
    }

    render() {
        return (
            <button onFocus={this.eyes} onBlur={this.blur}></button>
        )
    }
}
