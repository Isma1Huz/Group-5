import React, { useState } from 'react';
import Select from 'react-select';
import './Homepage.css';
import image1 from '../images/logo1.jpg'; 
import image2 from '../images/logo2.jpg';
import image3 from '../images/logo3.jpg';
import image4 from '../images/logo.jpg';
import image6 from '../images/girl.jpg';
import image9 from '../images/bannerbtm.jpg';
import { Link } from 'react-router-dom';

function Homepage() {

  const [selectedOption, setSelectedOption] = useState(null);
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  const options = [
    { value: 'Web', label: 'Web' },
    { value: 'Software', label: 'Software' },
    { value: 'Mobile', label: 'Mobile' },
    { value: 'Security', label: 'Security' } 
   ];

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: 'lightgray',
      borderRadius: 8,
      width: '120%',
      marginLeft: '10px',
      zIndex: 1
    }),
    option: (styles, { isFocused }) => ({
      ...styles,
      backgroundColor: isFocused ? 'lightblue' : 'white',
    }),
  };


  const fetchData = async () => {
    setIsLoading(true);

    try {
      fetch(`http://127.0.0.1:5555/courses`)
      .then((response) => response.json())
      .then((response) => {
        setFetchedData(response);
        console.log(response);

      })

      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };



  
  return (
    <>
     <div className="nav1">
      <h1>eLearning</h1>
      <Link to="/profile">
        <button id="btns"><strong>My Profile</strong> </button>
      </Link>

    </div>
    <div className="textimg">
      <div id="txt">
      <h2>You bring the <span>expertise</span>, we'll make it unforgatable.</h2>
      <p>Using highly personalised activities, videos and animations you can energise your students and motivate them achieve their learning goals as they progress through their journey.</p>
      <div className='SearchContainer'>
        <Select
          value={selectedOption}
          onChange={handleSelectChange}
          options={options}
          isSearchable={true}
          styles={customStyles}
          placeholder="Select Course"
        />
        <button onClick={fetchData} disabled={!selectedOption || isLoading} className='search'>
          {isLoading ? 'Loading...' : 'Search'}
        </button>
      </div>
  


      </div>
   
      <div id="imgg">
      
      <img  id=
      'zindex'src={image6} alt="Image 1" />
      </div>
    </div>
    <div>
         <ul>

          {  fetchedData.map((item) => (
              <li className='listItem'>
                <img src={item.image} className='course_img' alt="Image"/>
                <h4>{item.title}</h4>
                <Link to="/content">
                    <button id="btns" className='goto'><strong>Go to Course</strong> </button>
                </Link>
              </li>
          ))
        }
         </ul>


      </div>
    <div class="banner">
        <img src={image1} alt="Image 1" />
        <img src={image2} alt="Image 2" />
        <img src={image3} alt="Image 3" />
        <img src={image4} alt="Image 4" />
    </div>

    <div class="bannerbtm">
       <img id="bannerimage" src={image9} alt="Image 9" />
    </div>
    </>
  );


};


export default Homepage;
