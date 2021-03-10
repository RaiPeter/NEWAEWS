import React from 'react'
import './donation.css'
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


function Donation() {
    return (
        <div class="container">
        <div class="innerwrap">
        
            <section class="section1 clearfix">
                <div class="textcenter">
                    <span class="shtext">Contact Us</span>
                    <span class="seperator"></span>
                    <h1 style="
                    padding-top: 30px;
                ">Contribute to A.E.W.S</h1>
                </div>
            </section>
        
            <section class="section2 clearfix">
                <div class="col2 column1 first">
                    <img src={Image2} alt="Snow" style="width:100%" />
                </div>
                <div class="col2 column2 last">
                    <div class="sec2innercont">
                        <div class="sec2addr">
                            <p>Through workshops and various activities, awareness is generated amongst parents and local communities about the importance of education and welfare of society also conducts regular counseling sessions to encourage parents to send their children especially girls to school and help them participate in various activities.</p>
                            
                        </div>
                    </div>
                    <div class="sec2contactform">
                        <h3 class="sec2frmtitle">Your Contribution Makes A Big Impact</h3>
                        <table>
                            <tr>
                              <th>BANK NAME</th>
                              
                              <th>XXXXXX</th>
                            </tr>
                            <tr>
                              <td>Branch</td>
                              
                              <td>XXXXXXX</td>
                            </tr>
                            <tr>
                              <td>IFSC Code</td>
                              
                              <td>XXXXXXXXXXX</td>
                            </tr>
                            <tr>
                              <td>A/C No</td>
                              
                              <td>XXXXXXXXXXX</td>
                            </tr>
                            
                          </table>
                    </div>

                </div>
            </section>
        
        </div>
    </div>
    )
}

export default Donation
