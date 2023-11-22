import React from 'react';
import './Paintings.css'; 
import { Link } from 'react-router-dom';

import paint1Image from './p1.jpg';
import paint2Image from './p2.jpg';
import paint3Image from './p3.jpg';
import paint4Image from './p4.jpg';
import paint5Image from './p5.jpg';
import paint6Image from './p6.jpg';
import paint7Image from './p7.jpg';
import paint8Image from './p8.jpg';
import paint9Image from './p9.jpg';
import paint10Image from './p10.jpg';
import paint11Image from './p11.jpg';
import paint12Image from './p12.jpg';


const Paintings = () => {


  const Paintingss = [
    {
      id: 1,
      name: 'Tree of Life-9986',
      dimensions: '48x36 in',
      price: '6500/-',
      image: paint1Image, 
    },
    {
      id: 2,
      name: 'Untitled-9960',
      dimensions: '48x48 in',
      price: '2400/-',
      image: paint2Image , 
    },
    {
      id: 3,
      name: 'Untitled-9984',
      dimensions: '38x38 in',
      price: '1500/-',
      image: paint3Image , 
    },
    {
      id: 4,
      name: 'Untitled-9983',
      dimensions: '20x20 in',
      price: '8000/-',
      image: paint4Image , 
    },
    {
      id: 5,
      name: 'Untitled-9980',
      dimensions: '12x12 in',
      price: '3500/-',
      image: paint5Image , 
    },
    {
      id: 6,
      name: 'Untitled-9975',
      dimensions: '36x60 in',
      price: '9000/-',
      image: paint6Image , 
    },
    {
      id: 7,
      name: 'Untitled-9966',
      dimensions: '36x24 in',
      price: '7500/-',
      image: paint7Image , 
    },
    {
      id: 8,
      name: 'Darvaaja(The Door)',
      dimensions: '36x36 in',
      price: '3500/-',
      image: paint8Image, 
    },
    {
      id: 9,
      name: 'Shrinathji Pichwai',
      dimensions: '40.5X55.5 in',
      price: '9000/-',
      image: paint9Image , 
    },
    {
      id: 10,
      name: 'Shrinathji Pichwai',
      dimensions: '34x46 in',
      price: '9000/-',
      image: paint10Image , 
    },
    {
      id: 11,
      name: 'Untitled-9963',
      dimensions: '19x14 in',
      price: '6000/-',
      image: paint11Image , 
    },
    {
      id: 12,
      name: 'Untitled-9962',
      dimensions: '19x14 in',
      price: '6000/-',
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
          <p>Dimensions: {painting.dimensions}</p><br></br>
          <p>Price: {painting.price}</p><br></br>
          <Link to="/payment">
              <button>Buy Now</button>
            </Link>
         
          </center>
        </div>
      ))}
    </div>
  );
      };

export default Paintings;