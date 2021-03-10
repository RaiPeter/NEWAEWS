import React from 'react'
import './aboutus.css'
import Image1 from '../assets/images/pic1.jpg';
import Image2 from '../assets/images/pic2.jpg';
import Image3 from '../assets/images/pic3.jpg';
import Image4 from '../assets/images/pic4.jpg';
import Image5 from '../assets/images/pic7.jpg';
import Image8 from '../assets/images/pic8.jpg';
import Image9 from '../assets/images/pic9.jpg';
import Image10 from '../assets/images/pic10.jpg';
import Image11 from '../assets/images/pic11.jpg';
import Image12 from '../assets/images/pic12.jpg';

function Aboutus() {
    return (
      <div>
        <div class="clearfix">
            <img class="img2" src={Image12} alt="Pineapple" width="570" height="370" style={{marginRight: '20px',borderRadius: '10px',width: '445px'}} />
            <h1 style={{marginTop: '10px'}}>About Us</h1>
Established in the year of 2016 Accomplish Education and Welfare Society is a Non-profit and Non Governmental Organization. It has been extensively working in the various cities of Kolkata. AEWS mainly focused in the field of Education, Health, Public Awareness and Welfare of Society. It is formed by likeminded people who never feel restless in lending helping hands to our society in numerous manners.
          </div>
    
          
          {/* column  */}
          <div class="row" style={{height: '600px'}}>
            <div class="column" style={{backgroundColor:'rgba(170, 170, 170, 0)'}}>
                <img src="https://koshambifoundation.org/wp-content/uploads/2019/10/missionresized.gif" alt="Forest" style={{width: '180px'}} />
               {/* <h2>Our Mission</h2>  */}
              <p>Accomplish Education and Welfare Society AEWS believes in servicing the community in every possible ways be it in the field of education, health or in uplifting  the deprived family. Our main aim is to work for the betterment of our society.

              </p>
            </div>
            <div class="column" style={{backgroundColor:'rgba(187, 187, 187, 0)'}}>
                <img src="https://mywings.ooo/img/yellow-vision.gif" alt="Forest" style={{width: '140px',height: '135px'}} />
              <p style={{marginTop: '0px'}}>The Vision of Accomplish Education and Welfare Society is to impart education to every underprivileged child and generate awareness on health, education and basic amenities to our society.</p>
            </div>
          </div>
          </div>
    )
}

export default Aboutus
