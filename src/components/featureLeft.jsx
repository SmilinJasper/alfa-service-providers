import React, { Component } from 'react'
import './featureLeft.css';

class FeatureLeft extends Component {
    state = {  }

    render() { 
        return ( 

    <div className='feature-left'>

        <img src={this.props.imgSrc} alt={this.props.imgAlt} />

        <div className='features'>
            <h3>{this.props.title}</h3>
            <p>
                {this.props.firstParagraph}
            </p> 

            <p>
                {this.props.secondParagraph}
            </p>
        </div>

        <div className='pros'>
            <ul>
            {this.props.pros ? this.pros = this.props.pros.map(pro => <li>{pro}</li>) : null}
            </ul>
        </div>

    </div>

        );
    }
}
 
export default FeatureLeft;