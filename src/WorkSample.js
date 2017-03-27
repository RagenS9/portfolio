import React, { Component } from 'react';

class WorkSample extends Component {
    // You only need constructor
    constructor(props) {
        super(props);

        // Internal values that can change over time with this.setState({}) calls
        this.state = {
            style: ''
        }
    }

    // You can read incoming props, like title="", using this.props.title ...wrapping that in {} will output it to the screen
    render() {
        return <div className="column sample">
            <div className="section">
                <a href={this.props.link}>
                <h3>{this.props.title}</h3><br/>
                    <p className={this.state.style }>
                    {this.props.description} <br/><br/>
                        <img className="screen" src = {this.props.screenshot} />
                    </p>
                </a>
                <a href={this.props.secondlink}>
                    <p className={this.state.style }>
                    {this.props.seconddescription} <br/>
                    </p>
                </a>
            </div>
        </div>
    }
}

export default WorkSample;