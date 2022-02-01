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
              title='DIY - MAGNETIC TYPE'
              imgSrc='/images/services/mosquito-net/diy-magnetic-type.png' 
              imgAlt='DIY Magnetic Type in Sulur, Coimbatore'
              firstParagraph='This type Mosquito Net is used for windows and ventilator, Unique design and unbreakable PVC body for durable life. Insect screens are held to the window frame using magnets, 1 magnetic strip on insect screen & another pasted on window frame with 3M adhesive magnetic tape.'
              secondParagraph='The attracting magnets forms a seal around the window frame yet allows you to easily open /close your windows or remove the whole insect screen to wash. Peel the screens off with the pull string at either corners at the bottom of insect screen to open/close window. Release the screen when you are done & the insect screen will snap back.'
              pros={[
                'Unique Design.',
                'PVC outer frame with Fibreglass mesh used.',
                'Easy to wash and Quick Install.',
                'Free Airflow, Rust Free and Durable.'
              ]}
            />

            <FeatureLeft
              title='WINDOW - OPENABLE TYPE'
              imgSrc='/images/services/mosquito-net/window-openable-type.png' 
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
            />

            <FeatureRight 
              title='MAGNETIC - WINDOW OPENABLE TYPE'
              imgSrc='/images/services/mosquito-net/magnetic-window-openable-type.png' 
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
            />

            
            <FeatureLeft
              title='DOOR - OPENABLE TYPE'
              imgSrc='/images/services/mosquito-net/door-openable-type.png' 
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
            />

            <FeatureRight 
              title='TWO TRACK - SLIDING SYSTEM'
              imgSrc='/images/services/mosquito-net/two-track-sliding-system.png' 
              imgAlt='TWO TRACK - SLIDING SYSTEM in Sulur, Coimbatore'
              firstParagraph='The retractable Aluminium two track sliding systems is double cassette doors and Balconies. We use an exclusive bottom rolling wheel system for the smooth functioning of sliding screen doors and windows.'
              secondParagraph='Excellent visibility very	sturdy in	construction combined with elegent design makes our sliding systems a truly wonderful product for windows, doors, balconies that come with wider openings to allow sunlight and fresh air to pass but meshed closely enough to keep insects.'
              pros={[
                'Very sturdy construction and visibility.',
                'High quality Channel with epoxy coated.',
                'Unique design and perfect space saver.',
                'Sliding track can be easy to remove and clean.',
                'Bearing wheels used for smoother sliding.'
              ]}
            />

            <FeatureLeft
              title='ROLLER - SHUTTER SYSTEM'
              imgSrc='/images/services/mosquito-net/roller-shutter-system.png' 
              imgAlt='ROLLER - SHUTTER SYSTEM in Sulur, Coimbatore'
              firstParagraph='Spring loaded vertical roller shutter retrieves 100% natural light and fresh air. Washable and easy to maintain.'
              secondParagraph='These mosquito net is nothing but same mechanism as like the roller shutter systems. Strong panels will be screwed to hold the mesh on left and right side of the window net. A round pipe will be cut to the size of window width and the mesh will be rolled in it and fixed tightly with spring systems and finally inserted into a round alloy panel. This will be fixed as the top panel of the windows. An plate will be attached to the outer end of the mesh and it contains a center hole in which a thread will be tied to pull and push the mesh from top to bottom.'
              pros={[
                'Easy to handle and suit for all type of windows.',
                'Ideal product and elegant look for Interior.',
                'Powerful spring system used for slow or fast push and pull function.',
                'Perfect space saver.'
              ]}
            />

            <FeatureRight 
              title='MOTORISED - ROLLER SHUTTER SYSTEM'
              imgSrc='/images/services/mosquito-net/motorised-roller-shutter-system.png' 
              imgAlt='MOTORISED - ROLLER SHUTTER SYSTEM in Sulur, Coimbatore'
              firstParagraph='Motorised roller blinds provides not only protection against insects, but also an optimal filter against atmospheric pollution such as dust particles and pollens and good air circulation ensures wetness, good sleep, helps focusing and enhances your day-to-day performance.'
              secondParagraph='Motorised roller blinds has a special features that bush on dual opening sides of cartridge design, makes mesh net cleaned by each time of opening and closing. This bearing enabled slide to ensure a more smooth push in and pull out activity. The windproofing design can stop the netting from breaking away from the slide track. Motorised roller screen disappears in its box when not in use, as do the manually operated roller screens and it has other advantages. You can control it even more conveniently via wall operation or radio remote control and simultaneously connect it to house controls (Smart Assistant).'
              pros={[
                'Retractable design and attractive design',
                'High speed motor with soft start and soft brake.',
                'Wind proof zip push available.',
                'Specially designed for large openings.',
                '3 years motor warranty and lifetime maintenance.'
              ]}
            />
            
            <FeatureLeft
              title='PLEATED - SLIDING SYSTEM'
              imgSrc='/images/services/mosquito-net/pleated-sliding-system.png' 
              imgAlt='PLEATED - SLIDING SYSTEM in Sulur, Coimbatore'
              firstParagraph='The retractable systems used for double cassette doors and Balconies that come with wider openings to allow sunlight and fresh air.'
              secondParagraph='This mosquito net is highly rich look on your windows. The mechanism in this design is quite different from comparing with the other. In this type, the fibre-glass will be folded like zig-zag and a set of ropes will be inserted in between the foldings. The zig-zag folded mesh will be pleated at one side (either at right or left) and pull towards the other end for closing. Fabricated fibre-Class is the only material can be used in this Pleated model.'
              pros={[
                'Easy to handle and easy to clean.',
                'Perfect space saving and elegant design.',
                'Zig zag foldable mesh for easy sliding.',
                'German mechanism used',
                'It can be service easily and low level cost.'
              ]}
            />

            <FeatureRight 
              title='BARRIER FREE - SLIDING SYSTEM'
              imgSrc='/images/services/mosquito-net/motorised-roller-shutter-system.png' 
              imgAlt='BARRIER FREE - SLIDING SYSTEM in Sulur, Coimbatore'
              firstParagraph='Barrier Free or collapsible mosquito nets is a unique mosquito net system and a great solution for huge openings. It gives wider openings to allow sunlight and fresh air to pass but meshed closely enough to keep insects out.'
              secondParagraph='This screens works on spring less technology with PVC based chain along the runner in floor. Trackless, retracktable, will not stumble or trip children or adults (safty). It has the option to use a single shutter or twin shutter opening. It can be suggested to doors, balconies, French doors windows with larger openings.'
              pros={[
                'User-friendly, robust and modern.',
                'Smooth and tightness (flexibility)',
                'It can be customized in any huge size doors',
                'Flame retardant',
                'Prevent dirts and greasy resistent',
                'Pleated Polyester Water Proof Mesh',
                'Absence of guides on the floor makes it easy to clean and transit'
              ]}
            />

            <FeatureLeft
              title='MAGNETIC - DOOR SCREEN'
              imgSrc='/images/services/mosquito-net/honeycomb-partition-system.png' 
              imgAlt='MAGNETIC - DOOR SCREEN in Sulur, Coimbatore'
              firstParagraph='Honeycomb blinds provide a very warm and cozy feel to any room. When it comes to window and doors treatment options, Honeycomb Partition Door clearly outperform the competition all around.'
              secondParagraph='Thia luxurious fabrics folded into honeycomb-shaped cells, these exceptional shades form an attractive barrier that insulates windows and helps regulate the temperature inside, whether the goal is to keep cold out during the winter or keep heat out during the summer. This shades available in transparent and blackout colour shades. For a warm and cozy feel, our light filtering cellular Blinds allow the gentle filtration of light through the shade. For blocking out light, our blackout shades are the most opaque and provide the light blockage possible.'
              pros={[
                'User Friendly, energy efficient.',
                'Suitable for partition, sunshade and Blinds',
                'Available in Translucent and Blackout.',
                'UV protection, low noice, flame retardant fabrics',
                'Absence of guides on the floor makes it easy to clean and transit',
                'Available with manual or Motorization.'
              ]}
            />

            <FeatureRight 
              title='VELCRO TYPE'
              imgSrc='/images/services/mosquito-net/velcro-type.png' 
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

            <FeatureLeft
              title='MAGNETIC - DOOR SCREEN'
              imgSrc='/images/services/mosquito-net/magnetic-door-screen.png' 
              imgAlt='MAGNETIC - DOOR SCREEN in Sulur, Coimbatore'
              firstParagraph='Magnetic screen doors are designed like a curtain that fits around your door frame, for hands-free opening and closing with a magnetic strip in the center. There are even options to use on balcony door.'
              secondParagraph='Magnetic doors have two mesh panels that attach to the door frame. The Panels come together in the center using weighted magnets that are sewn into the border of the mesh netting to magnetically close the door. Users simply pass through at will and the doors close behind them automatically.'
              pros={[
                'Easy to handle and easy to clean.',
                'Perfect space saving and elegant design.',
                'Ready to fix material.',
                'Heavy magnetic strip used for close joint',
                'Cost effective.',
                'Quick and easy install'
              ]}
            />
        </section>

        <Footer />
      </main> 
      
    );
  }

}
 
export default MosquitoNet;

