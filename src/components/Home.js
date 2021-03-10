import React from 'react';
import './home.css';
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

function Home() {
  return (
  <div>
       
       <div id="slider">
<figure>
  <img src={Image1} alt="Nature" className="responsive" width="500" height="300" />
  <img src={Image2} alt="Nature" className="responsive" width="600" height="400" />
  <img src={Image3} alt="Nature" className="responsive" width="600" height="400" />
  <img src={Image4} alt="Nature" className="responsive" width="600" height="400" />
  <img src={Image5} alt="Nature" className="responsive" width="600" height="400" />
  </figure>
</div>


<h1 style={{marginTop : '60px'}}>HOW COULD YOU HELP</h1>

{/* card */}

 
<div className="content" style={{paddingTop: '10px',height: '500px'}}>
{/* card */}
   <div className="card">
      
         <div className="icon"><i className="fa fa-user-circle-o"></i></div>
         <p className="title">Give Donetion</p>
         <p className="text">Click to see or edit your profile page.</p>
      
   </div>
   
   <div className="card">
      
         <div className="icon"><i className="fa fa-handshake-o" aria-hidden="true"></i></div>
         <p className="title">Be A Volunteer</p>
         <p className="text">Check all your favourites in one place.</p>
      
   </div>
      <div className="card">
      
         <div className="icon"><i className="fa fa-inr" aria-hidden="true"></i></div>
         <p className="title">Quick Fundraise</p>
         <p className="text">Add or change your contacts and links.</p>
      
   </div>
   
</div>



<div className="clearfix" style={{paddingLeft: '10px', marginTop: '50px'}} >
      <img className="img2" src="https://darvideo.tv/wp-content/uploads/2019/10/2-3.jpg" alt="Pineapple" width="170" height="170" style={{width: '480px',height: '290px'}}/>
      <h1>About Us</h1>
     
     Established in the year of 2016 Accomplish Education and Welfare Society is a Non-profit and Non Governmental Organization. It has been extensively working in the various cities of Kolkata. AEWS mainly focused in the field of Education, Health, Public Awareness and Welfare of Society. It is formed by likeminded people who never feel restless in lending helping hands to our society in numerous manners.

    </div>
  
    <br/><br/>
    <hr className="rounded" style={{width: '480px'}}/> 

  
    <div className="services-section" >
        <div className="services-heading" style={{paddingTop: '0px'}}>
            <h1>Our Programms</h1>
        </div>

        <div className="services">
      {/* 1 */}
            <div className="services-cell">
                <img src="https://cdn2.vectorstock.com/i/1000x1000/33/71/red-streaming-blood-cells-background-vector-17263371.jpg" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                    Blood Donation
                </div>
            </div>
            

        {/* 2 */}
            <div className="services-cell">
                <img src="https://image.freepik.com/free-photo/pile-clothes-background_135108-560.jpg" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                  Cloths distribution
                </div>
            </div>

            {/* 3 */}
            <div className="services-cell">
                <img src="https://media.istockphoto.com/vectors/mandala-retro-red-background-vector-id601938956?k=6&m=601938956&s=612x612&w=0&h=Nk5zwvbyeDe5-fhQ0r24GZFU2MjPFuyli35ha6f7XhM=" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                  Caltural Events
                </div>
            </div>

            {/* 4 */}
            <div className="services-cell" style={{width: '155px'}}>
                <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX42701927.jpg" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                  Educational Events
                </div>
            </div>

            {/* 5 */}
            <div className="services-cell">
                <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-269409,resizemode-1,msid-75483789/news/economy/finance/how-printing-money-can-save-the-economy-of-a-nation.jpg" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                  Financial Events
                </div>
            </div>

            {/* 6 */}
            <div className="services-cell">
                <img src="https://image.shutterstock.com/z/stock-vector-scholarship-word-cloud-collage-education-concept-background-755239357.jpg" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                  Scholarship Events
                </div>
            </div>

            {/* 7 */}
            <div className="services-cell">
                <img src="https://image.freepik.com/foto-gratis/gradiente-textura-blanca-dorada-negra-azul_159701-693.jpg" alt="" className="services-cell_img" />
                <div className="services-cell-text">
                  Other Events
                </div>
            </div>

        </div>
    </div>
    <br/><br/>



 


    <div className="row">
        <div className="column" style={{paddingTop: '0px',height: '510px'}}>
         
         <img src={Image8} alt="Nature" className="responsive" />
        </div>
        <div className="column" style={{backgroundColor:'rgba(173, 60, 60, 0)',height: '520px'}}>
            <h2>We Are Non-profit Team</h2>
            <br />
            <p>The key components that bring growth and progress into society are Education. Children are the future of a nation. </p>
            <button className="btn">Donate Us</button>
        </div>
      </div>

     
      <br /><br />
      <hr className="rounded" style={{width: '480px'}}/>
  
<div className="container">

	<h1 className="heading">Our Gallery</h1>
    

	<div className="gallery">

		<div className="gallery-item">
			<img className="gallery-image" src={Image10} alt="person writing in a notebook beside by an iPad, laptop, printed photos, spectacles, and a cup of coffee on a saucer" />
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src={Image11} alt="sunset behind San Francisco city skyline" />
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src={Image12} alt="people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan" />
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src={Image9} alt="car interior from central back seat position showing driver and blurred view through windscreen of a busy road at night" />
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src={Image3} alt="back view of woman wearing a backpack and beanie waiting to cross the road on a busy street at night in New York City, USA" />
		</div>

		<div className="gallery-item">
			<img className="gallery-image" src={Image4} alt="man wearing a black jacket, white shirt, blue jeans, and brown boots, playing a white electric guitar while sitting on an amp" />
		</div>

	</div>

</div>



  </div>
  )
}

export default Home
