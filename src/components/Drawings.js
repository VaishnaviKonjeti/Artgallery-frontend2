import React from 'react';
import './Drawings.css'; 
import { Link } from 'react-router-dom';

import draw1Image from './d1.jpg';
import draw2Image from './d2.jpg';
import draw3Image from './d3.jpg';
import draw4Image from './d4.jpg';
import draw5Image from './d5.jpg';
import draw6Image from './d6.jpg';
import draw7Image from './d7.jpg';
import draw8Image from './d8.jpg';
import draw9Image from './d9.jpg';
import draw10Image from './d10.jpg';
import draw11Image from './d11.jpg';
import draw12Image from './d12.jpg';


const Drawings = () => {
	const drawings = [
	  {
		id: 1,
		name: 'Untitled-9625',
		dimensions: '18x12 in',
		price: '1000/-',
		image: draw1Image,
	  },
	  {
		id: 2,
		name: 'Untitled-9624',
		dimensions: '18x12 in',
		price: '1000/-',
		image: draw2Image,
	  },
	  {
		id: 3,
		name: 'Sarjan-9449',
		dimensions: '40x40 in',
		price: '1500/-',
		image: draw3Image,
	  },
	  {
		id: 4,
		name: 'Untitled-9447',
		dimensions: '23x17 in',
		price: '2500/-',
		image: draw4Image,
	  },
	  {
		id: 5,
		name: 'Shiva-9314',
		dimensions: '36x24 in',
		price: '5200/-',
		image: draw5Image,
	  },
	  {
		id: 6,
		name: 'Lakshmi-9313',
		dimensions: '36x26 in',
		price: '3500/-',
		image: draw6Image,
	  },
	  {
		id: 7,
		name: 'Kaveri-9312',
		dimensions: '36x26 in',
		price: '4600/-',
		image: draw7Image,
	  },
	  {
		id: 8,
		name: 'Telangana Folk-9308',
		dimensions: '25x18 in',
		price: '3500/-',
		image: draw8Image,
	  },
	  {
		id: 9,
		name: 'Untitled-9085',
		dimensions: '14x20 in',
		price: '1500/-',
		image: draw9Image,
	  },
	  {
		id: 10,
		name: 'Shrinathji Pichwai',
		dimensions: '34x46 in',
		price: '9000/-',
		image: draw10Image,
	  },
	  {
		id: 11,
		name: 'Untitled-9084',
		dimensions: '14x20 in',
		price: '1500/-',
		image: draw11Image,
	  },
	  {
		id: 12,
		name: 'Horses-8942',
		dimensions: '20x14 in',
		price: '4500/-',
		image: draw12Image,
	  },
	];
  
	const handleBuy = (drawingId) => {
	  // Handle buy button click for drawings
	  console.log(`Buy button clicked for drawing ${drawingId}`);
	  // Implement the logic for purchasing the drawing
	};
  
	return (
	  <div className="drawings-container">
		{drawings.map((drawing) => (
		  <div key={drawing.id} className="drawing-item">
			<img src={drawing.image} alt={drawing.name} />
			<center>
			  <h3>{drawing.name}</h3>
			  <p>Dimensions: {drawing.dimensions}</p><br></br>
			  <p>Price: {drawing.price}</p><br></br>
			  <Link to="/payment">
				<button onClick={() => handleBuy(drawing.id)}>Buy Now</button>
			  </Link>
			</center>
		  </div>
		))}
	  </div>
	);
  };
  
  export default Drawings;