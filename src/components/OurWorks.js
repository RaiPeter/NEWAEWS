import React from 'react'
import './ourWorks.css'
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

function OurWorks() {
    return (
                   <div>

    <div className="header"></div>
      
      <div className="row">
        <div className="leftcolumn">
          <div className="card">
            <h2>Our Events</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div><img src={Image10} alt="Nature" className="responsive" width="600" height="300" /></div>
            <p>Events</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="card">
            <h2>Our Programms</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div ><img src={Image11} alt="Nature" className="responsive" width="600" height="400" /></div>
            <p>Programms</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
          <div className="card">
            <h2>Our Distribution</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div ><img src={Image12} alt="Nature" className="responsive" width="600" height="400" /></div>
            <p>Distribution</p>
            <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
          </div>
        </div>
        <div className="rightcolumn">
          <div className="card">
            <h3>A.E.W.S</h3>
            <p>Through workshops and various activities, awareness is generated amongst parents and local communities 
              about the importance of education and welfare of society also conducts regular counseling sessions to encourage parents to send their children especially girls to school and help them participate in various activities.</p>
            
          </div>
          <div className="card">
            <h3>Our Gallary</h3>
            <div className="fakeimg"><img src={Image1} alt="Nature" className="responsive" width="60" height="40" /></div><br />
            <div className="fakeimg"><img src={Image2} alt="Nature" className="responsive" width="60" height="40" /></div><br />
            <div className="fakeimg"><img src={Image8} alt="Nature" className="responsive" width="60" height="40" /></div>
          </div>
          <div className="card">
            <h3>Our Address</h3>
            <div className="sec2addr">
              <p>45 BC, a Latin professor at Hampden-Sydney College in Virginia</p>
              <p><span className="collig">Phone :</span> +91 976885083</p>
              <p><span className="collig">Email :</span> vivek.mengu016@gmail.com</p>
              <p><span className="collig">Fax :</span> +91 9768850839</p>
          </div>
          </div>
          
        </div>
      </div>
      </div>      
    )
}

export default OurWorks
