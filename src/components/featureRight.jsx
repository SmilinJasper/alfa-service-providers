import React, { Component } from 'react'
import './featureRight.css';

class FeatureRight extends Component {
    state = {  }
    render() { 
        return ( 

    <div className='feature-right'>
        
        <img src={this.props.imgSrc} alt={this.props.imgAlt} />

        <div>
            <h3>{this.props.title}</h3>
            <p>
                {this.props.firstParagraph}
            </p> 

            <p>
                {this.props.secondParagraph}
            </p>
        </div>

    </div>

        );
    }
}
 
export default FeatureRight;