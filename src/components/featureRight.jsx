import React, { Component } from 'react'
import './featureRight.css';

class FeatureRight extends Component {
    state = {  }
    render() { 
        return ( 

    <div className='feature-right'>
        <img src="/images/services/mosquito-net/diy-magnetic-type.png" alt="" />

        <div>
            <h3>DIY Magnetic Type</h3>
            <p>
                This type Mosquito Net is used for windows and ventilator, Unique design and unbreakable PVC body for durable life. Insect screens are held to the window frame using magnets, 1 magnetic strip on insect screen & another pasted on window frame with 3M adhesive magnetic tape.
            </p> 

            <p>
                The attracting magnets forms a seal around the window frame yet allows you to easily open /close your windows or remove the whole insect screen to wash. Peel the screens off with the pull string at either corners at the bottom of insect screen to open/close window. Release the screen when you are done & the insect screen will snap back. 
            </p>
        </div>

    </div>

        );
    }
}
 
export default FeatureRight;