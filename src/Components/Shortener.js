import React, { Component } from 'react';

class Shortener extends Component {
    constructor(props){
        super(props);
        this.state = {
            link : null 
        }
        this.submitHandler =this.submitHandler.bind(this)
    }
    submitHandler = (event) => {
        event.preventDefault();
        
    }
    submitValue = (value) => {
        this.setState({link: value.target.value})     
    }
    render() {
        const {setLink} = this.props;
        return (
            <div>
                <h1 id = "Banner">Link Shortener</h1>
                <form onSubmit = {this.submitHandler}>
                <input type="text" id = "todo" placeholder = "New Item Tilte!" onChange = {this.submitValue} className = "textbox"/>
                <input type="submit" onClick ={() => setLink(this.state.link)} className = "button"/>
                </form>
            </div>
        );
    }
}

export default Shortener;
