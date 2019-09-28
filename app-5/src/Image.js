import React, { Component } from 'react';

class Image extends Component {
    render(){    
        return (
            <div>
                <img src={this.props.link} />
                <text>Human Flag Tavas</text>
            </div>
        )
        
    }
}

export default Image;