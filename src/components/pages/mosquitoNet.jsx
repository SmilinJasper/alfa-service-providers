import React, { Component } from 'react';
import Header from '../header';
import ServiceTitle from '../serviceTitle';
import FeatureRight from '../featureRight';
import Footer from '../footer';

class MosquitoNet extends Component {

  state = {  }

  render() { 
    return ( 

      <main>
        <Header />

        <section>
            <ServiceTitle title='MOSQUITO NET'/>
            <FeatureRight />
        </section>

        <Footer />
      </main> 
      
    );
  }

}
 
export default MosquitoNet;

