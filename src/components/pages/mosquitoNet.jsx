import React, { Component } from 'react';
import Header from '../header';
import ServiceTitle from '../serviceTitle';
import FeatureRight from '../featureRight';
import FeatureLeft from '../featureLeft';
import Footer from '../footer';

class MosquitoNet extends Component {

  componentDidMount(){
    document.title = "Mosquito Nets"
  }

  state = {  }

  render() { 
    return ( 

      <main>
        <Header />

        <section>

            <ServiceTitle title='MOSQUITO NET'/>

            <FeatureRight
              title='WINDOW - OPENABLE TYPE'
              imgSrc='/images/window-openable-type.png' 
              imgAlt='WINDOW - OPENABLE TYPE in Sulur, Coimbatore'
              firstParagraph='Window Insect screens make sure the pesky bugs stay out of your home. We can help you find the right insect screens that will work you.'
              secondParagraph='The channel barswhich we use are verystrong and durable when comparing to the other dealers all over the city. We used high quality virgin engineering thermoplastics for flexible and unbrakable long lasting life. It is also free from fire and easy washable since the frame has been attached and detached easily from the wooden bars. Incase of aluminium / LJPVC windows, Wooden beadings will be fixed on four sides and the window frames will be attached on it. Window mosquito nets are available at multi colors.'
              pros={[
                'Easy to Clean and suits for daily use.',
                'Aesthetically designed Quality products.',
                'High quality Channel with epoxy coated.',
                'Non - breakable High quality components used',
                'Long losting Life.'
              ]}
              specifications={[
                {'Colour': 'Dark brown, Golden brown, White, Ivory, Black'},
                {'Mesh used': 'Fiber, Aluminium, S5-304 White and Black'},
                {'Outer frame': 'Width - 20mm, Thickness - 9mm'},
                {'Hinges': '(A+B) Thermoplastic'},
                {'Handle': 'Thermoplastic'},
                {'Corner': '45° & 90°'},
                {'Stopper': 'Virgin Thermoplastic'},
                {'Rubber': 'EPDM 4.4mm'},
                {'Connector': '(MCB) Thermoplastic'}
              ]}
            />

            <FeatureRight 
              title='MAGNETIC - WINDOW OPENABLE TYPE'
              imgSrc='/images/magnetic-window-openable-type.png' 
              imgAlt='MAGNETIC - WINDOW OPENABLE TYPE in Sulur, Coimbatore'
              firstParagraph='Magnetic Window Insect screens are ideal product for your Interior. Strip magnets and felt gives extra grip and withstand windforce.'
              secondParagraph='This type of frame slightly bigger than normal frame. Instead of plastic hinges we can use aluminium hinges and instead of plastic stopper we can use male and female magnetic strip be used to lock the frame. It gives extra grip and withstand windforce. Also we can use weather strip to inside and outside of the frame. The purpose of weather strip can cover the gape between frame and window. In this type, we mostly used black coated SS 304 for better look and long losting life.'
              pros={[
                'Easy to Clean and suits for daily use.',
                'High quality Channel with epoxy coated.',
                'Aluminium hinges and handle used.',
                'Magnets strip used to lock the frame.',
                'Weather strip used to cover the gapes.'
              ]}
              specifications={[
                {'Colour': 'Dark brown, Golden brown, White, Ivory, Black'},
                {'Mesh used': 'Fiber, Aluminium, S5-304 White and Black'},
                {'Outer frame': 'Width - 25.5mm, Thickness -12.7 mm'},
                {'Hinges': '(A+B) Thermoplastic Hinges'},
                {'Handle': 'Aluminium'},
                {'Corner': '45° - 76mm depth'},
                {'Strip': 'Weather strip'},
                {'Rubber': 'EPDM 5.5mm'},
                {'Magnet': '(A+B) 10mm'}
              ]}
            />

            
            <FeatureLeft
              title='DOOR - OPENABLE TYPE'
              imgSrc='/images/door-openable-type.png' 
              imgAlt='DOOR - OPENABLE TYPE in Sulur, Coimbatore'
              firstParagraph='This type of Stripe doors that is designed by using superior quality of material bases sourced from reliable vendors of the industry.'
              secondParagraph={`The entire range of screen doors provided by us have joint corners with a solid kick plate to prevent damage, with a central mid bars in the metal openable hinged version. Furthermore, these are widely used for various applications and us well acknowledge for their durability and easy to maintain properties. Effective protection against insects, these are available in various designs, sizes & finish and can be custom made as per the clients' requirements.`}
              pros={[
                'Easy to Clean and suits for daily use.',
                'Aesthetically designed Quality products.',
                'High quality Channel with epoxy coated.',
                'Using aluminium hinges and corners ressist sagging and gives long life.',
                'Long losting Life.'
              ]}
              specifications={[
                {'Frame': 'Outer width - 45mm, Middle width - 35mm'},
                {'Colour': 'Dark brown, Golden brown, White, Ivory, Black'},
                {'Corner': '45°'},
                {'Hinges': 'Aluminium Hinges'},
                {'Felt': '4mm weather strip'},
                {'Magnet': '(A+B) attachable'}
              ]}
            />

            <FeatureRight 
              title='VELCRO TYPE'
              imgSrc='/images/velcro-type.png' 
              imgAlt='VELCRO TYPE in Sulur, Coimbatore'
              firstParagraph='This type mosquito net is widely used as attachable detachable mosquito mesh, which is very economical, durable, rust free and easy washable. The Velcro tape has been used as a major part in this type. The fiber-glass mesh will be cut as per the measurements of the required windows/ventilators.'
              secondParagraph='. The loop of the tape has been well sewed to four sides of the mesh and the normal type hook oftheVefcrotapewill bestapled 0 stapler pin/ 3to4 inches) on the outer wooden frame of the required windows/ ventilators. If the window/ventilator is an aluminium or UPVC, then the sticker type hook (which is quite expensive than the normal type) will be pasted by applying durable SR glue on the outer frame. It gives protection from mosquitoes, flies and other tiny insects. We use 3 types of quality meshes, namely Royal Nets, Saint-gobain & Phifer.'
              pros={[
                'Unique Design.',
                'Fibreglass mesh used.',
                'Durable Easy to wash',
                'Quick and Easy Install.',
                'Free Airflow and Easy to Handle'
              ]}
            />

        </section>

        <Footer />
      </main> 
      
    );
  }

}
 
export default MosquitoNet;

