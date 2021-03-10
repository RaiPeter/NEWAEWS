import React from 'react'
import './contactus.css'
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

function Contactus() {
    return (
        <div class="container">
            <div class="innerwrap">
            
                        <h1>Drop Us a Mail</h1>
                <section class="section2 clearfix">
                    <div class="col2 column1 first">
                        <img src={Image8} alt="Snow" style="width:100%" />
                    </div>
                    <div class="col2 column2 last">
                        <div class="sec2innercont">
                            <div class="sec2addr">
                                <p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
                                <p><span class="collig">Phone :</span> +91 976885083</p>
                                <p><span class="collig">Email :</span> vivek.mengu016@gmail.com</p>
                                
                            </div>
                        </div>
                        <div class="sec2contactform">
                            <h3 class="sec2frmtitle">Want to Know More?? Drop Us a Mail</h3>
                            {/* <form action="">
                                <div class="clearfix">
                                    <input class="col2 first" type="text" placeholder="FirstName">
                                    <input class="col2 last" type="text" placeholder="LastName">
                                </div>
                                <div class="clearfix">
                                    <input  class="col2 first" type="Email" placeholder="Email">
                                    <input class="col2 last" type="text" placeholder="Contact Number">
                                </div>
                                <div class="clearfix">
                                    <textarea name="textarea" id="" cols="30" rows="7">Your message here...</textarea>
                                </div>
                                <div class="clearfix"><input type="submit" value="Send"></div>
                            </form> */}
                        </div>
    
                    </div>
                </section>
            
            </div>
        </div>
    )
}

export default Contactus
