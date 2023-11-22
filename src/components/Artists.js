import React from 'react';
import './Paintings.css'; 
import { Link } from 'react-router-dom';

import paint1Image from '../images/A1.jpg';
import paint2Image from '../images/A2.jpg';
import paint3Image from '../images/A3.jpg';
import paint4Image from '../images/A4.jpg';
import paint5Image from '../images/A5.jpg';
import paint6Image from '../images/A6.jpg';
import paint7Image from '../images/A7.jpg';
import paint8Image from '../images/A8.jpg';
import paint9Image from '../images/A9.jpg';
import paint10Image from '../images/A10.jpg';
import paint11Image from '../images/A11.jpg';
import paint12Image from '../images/A12.jpg';


const Author = () => {


  const Paintingss = [
    {
      id: 1,
      name: 'Nandalal Bose',
      image: paint1Image, 
    },
    {
      id: 2,
      name: 'Hemendranath Mazumdar',
      image: paint2Image , 
    },
    {
      id: 3,
      name: 'Jamini Roy',
      image: paint3Image , 
    },
    {
      id: 4,
      name: 'Ganesh Pyne',
      image: paint4Image , 
    },
    {
      id: 5,
      name: 'N.S Bendre',
      image: paint5Image , 
    },
    {
      id: 6,
      name: 'Jehangir Sabavala',
      image: paint6Image , 
    },
    {
      id: 7,
      name: 'Krishen Khanna',
      image: paint7Image , 
    },
    {
      id: 8,
      name: 'Jitish Kallat',
      image: paint8Image, 
    },
    {
      id: 9,
      name: 'T.V. Santhosh',
      image: paint9Image , 
    },
    {
      id: 10,
      name: 'Amrita Shergil',
      image: paint10Image , 
    },
    {
      id: 11,
      name: 'Ram kumar',
      image: paint11Image , 
    },
    {
      id: 12,
      name: 'Anish kapoor',
      image: paint12Image , 
    },
    
  ];



  const handleBuy = (paintingId) => {
    // Handle buy button click for paintings
    console.log(`Buy button clicked for painting ${paintingId}`);
  };

  return (
    <div className="paintings-container">
      {Paintingss.map((painting) => (
        <div key={painting.id} className="painting-item">
          <img src={painting.image} alt={painting.name} />
          <center>
          <h3>{painting.name}</h3>
         
          </center>
        </div>
      ))}
    </div>
  );
};

export default Author;