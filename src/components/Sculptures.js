import React from 'react';
import './Sculptures.css'; 
import { Link } from 'react-router-dom';

import sculpture1Image from './s1.jpg';
import sculpture2Image from './s2.jpg';
import sculpture3Image from './s3.jpg';
import sculpture4Image from './s4.jpg';
import sculpture5Image from './s5.jpg';
import sculpture6Image from './s6.jpg';
import sculpture7Image from './s7.jpg';
import sculpture8Image from './s8.jpg';
import sculpture9Image from './s9.jpg';
import sculpture10Image from './s10.jpg';
import sculpture11Image from './s11.jpg';
import sculpture12Image from './s12.jpg';


const Sculptures = () => {
  const sculptures = [
    {
      id: 1,
      name: 'Ganapati-9961',
      dimensions: '11x7x4 in',
      price: '8500/-',
      image: sculpture1Image, 
    },
    {
      id: 2,
      name: 'Bull-9960',
      dimensions: '16x18x8 in',
      price: '1450/-',
      image: sculpture2Image , 
    },
    {
      id: 3,
      name: 'Gold Ballon-9938',
      dimensions: '27x10x14 in',
      price: '4000/-',
      image: sculpture3Image , 
    },
    {
      id: 4,
      name: 'Mother and Child-9908',
      dimensions: '12x11x8 in',
      price: '1900/-',
      image: sculpture4Image , 
    },
    {
      id: 5,
      name: 'The Joy-9863',
      dimensions: '24x17x13 in',
      price: '1250/-',
      image: sculpture5Image , 
    },
    {
      id: 6,
      name: 'The Dancer-9831',
      dimensions: '21x14x4 in',
      price: '1100/-',
      image: sculpture6Image , 
    },
    {
      id: 7,
      name: 'Ganesha-9693',
      dimensions: '23x24x11 in',
      price: '7000/-',
      image: sculpture7Image , 
    },
    {
      id: 8,
      name: 'The Power-9682',
      dimensions: '12x29x11 in',
      price: '2500/-',
      image: sculpture8Image, 
    },
    {
      id: 9,
      name: 'Streched Bodies-9666',
      dimensions: '23x10x6 in',
      price: '6000/-',
      image: sculpture9Image , 
    },
    {
      id: 10,
      name: 'Deep In Thought-9665',
      dimensions: '19x10x5.5 in',
      price: '6000/-',
      image: sculpture10Image , 
    },
    {
      id: 11,
      name: 'Knockout Bunny-9333',
      dimensions: '13x16x7 in',
      price: '1500/-',
      image: sculpture11Image , 
    },
    {
      id: 12,
      name: 'Krishna-9217',
      dimensions: '11x7.5x4 in',
      price: '6000/-',
      image: sculpture12Image , 
    },
    
  ];

  const handleBuy = (sculptureId) => {
   
    console.log(`Buy button clicked for sculpture ${sculptureId}`);
  };

  return (
    <div className="sculptures-container">
      {sculptures.map((sculpture) => (
        <div key={sculpture.id} className="sculpture-item">
          <img src={sculpture.image} alt={sculpture.name} />
          <center>
          <h4>{sculpture.name}</h4>
          <p>Dimensions: {sculpture.dimensions}</p><br></br>
          <p>Price: {sculpture.price}</p><br></br>
        
          <Link to="/payment">
              <button>Buy Now</button>
            </Link>
          </center>
        </div>
      ))}
    </div>
  );
};

export default Sculptures;
