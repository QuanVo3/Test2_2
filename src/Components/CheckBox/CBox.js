import React, { Component } from 'react';

class CBox extends Component {
    render() {
        const {setType} = this.props;
        return (
            <div>
                <input type="button" onClick = {() => setType("short_link")} name="hobby" value="shrtco.de" />
                <input type="button" onClick = {() => setType("short_link2")} name="hobby" value="9qr.de" /> 
                <input type="button" onClick = {() => setType("short_link3")} name="hobby" value="shiny.link" /> 
            </div>
        );
    }
}

export default CBox;