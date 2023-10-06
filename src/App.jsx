import { useState } from 'react'
import './App.css'
import image1 from './images/logo1.jpg'; 
import image2 from './images/logo2.jpg';
import image3 from './images/logo3.jpg';
import image4 from './images/logo.jpg';
import image5 from './images/secimg.jpg';
import image6 from './images/girl.jpg';
import image7 from './images/rec2.jpg';
import image8 from './images/rec3.jpg';
import image9 from './images/bannerbtm.jpg';




function App() {
  

  return (
    <>
     <div class="nav1">
      <h1>eLearning</h1>
      <button id="btns"><strong> Start Free Trial →</strong> </button>

    </div>
    <div class="textimg">
      <div id="txt">
      <h2>You bring the <span>expertise</span>, we'll make it unforgatable.</h2>
      <p>Using highly personalised activities, videos and animations you can energise your students and motivate them achieve their learning goals as they progress through their journey.</p>
      <button class="reg">Register  →</button>
      <button class="log">Login  →</button>
      </div>
      <div id="imgg">
      
      <img  id=
      'zindex'src={image6} alt="Image 1" />
      </div>
    </div>
    <div class="banner">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
    </div>
    <div id="img-about">
    <div class="abt-us">
      <h1>About us</h1>
      <h3>eLearning provides the best opportunities to the students around the  globe.</h3>
    <p>Welcome to E-Learning Platform, where learning meets innovation. Our mission is to make
       education accessible, engaging, and effective for everyone. With a commitment to excellence, 
       we offer a diverse range of courses led by industry experts. Join us on a journey of knowledge and 
       skill-building. Discover, learn, and grow with E-Learning Platform.</p>
       <button class="reg">Join us  →</button>
       </div>
       <div class="img-abt">
       <img class="img1" src={image7} alt="Image 7" />
       <img class="img2"src={image8} alt="Image 8" />
       </div>

    </div>

    <div id="features">
      <div class="pic">
      <img src={image5} alt="Image 5" />
      </div>
      <div class="features">
        <h2>Features</h2>
        <h6>Unleash the Power of Learning</h6>
        <h3>Embark on an enriching educational journey with our feature-packed e-learning platform. Here's what makes us stand out:</h3>
      <p><b>Diverse Course Catalog:</b> Explore a rich catalog of courses, from coding to creative arts, tailored to your interests.<br></br>

<b>Interactive Learning :</b> Immerse yourself in interactive content, including video lectures, quizzes, and hands-on exercises.<br></br>

<b>Track Your Progress:</b> Monitor your progress effortlessly with advanced analytics. Earn certificates and badges as you conquer each course.<br></br>

<b>Engage with Peers:</b> Join discussion forums and collaborate with fellow learners. Share insights and experiences to enhance your learning.<br></br>

<b>Personalized Learning Paths:</b> Tailor your learning journey with adaptive paths and course recommendations based on your preferences.<br></br>

<b>Mobile-Friendly:</b> Learn on the go! Our responsive design ensures a seamless experience on your desktop, tablet, or mobile device.<br></br>

<b>Secure and Accessible:</b> Rest easy knowing your data is secure, and our platform is designed with accessibility in mind.</p>
<button class="learn">Learn More →</button>
      </div>
      
    </div>
    <div class="bannerbtm">
    <img src={image9} alt="Image 9" />
    </div>
    </>
  )
}

export default App
