import React, { Component } from 'react';
import marked from 'marked';
import './App.css';

class Markdown extends Component {
    marked() {
        let text = document.getElementById('text').value;
        return (
            document.getElementById("marked").innerHTML = ('<textbox>' + marked(text) + '</textbox>')
        )
    }

    render() {
        return(
            <div>
                <textarea id="text" onKeyUp={this.marked} rows="4" cols="50">
                 # start here!
                </textarea>
                <p id="marked" >  </p>
            </div>

        );
    }
}

export default Markdown;

