import React from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import SimpleImageSlider from "react-simple-image-slider";
import "./front.css";
import image1 from "./img1.jpg";
import image2 from "./img2.jpg";
import image3 from "./img3.jpg";
import image4 from "./img4.jpg";
import image5 from "./img5.jpg";
import p1 from "./p2.jpg";
import s1 from "./s1.jpg";
import p2 from "./d3.jpg";


function ImageSlider() {
  

  const [imageNum, setImageNum] = React.useState(1);

  const sliderImages = [
    {
      url: image1,
    },
    {
      url: image2,
    },
    {
      url: image3,
    },
    {
      url: image4,
    },
    {
      url: image5,
    },
  ];

  return (
    <div>
      <SimpleImageSlider
        width={1280}
        height={450}
        images={sliderImages}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        onStartSlide={(index, length) => {
          setImageNum(index);
        }}
        autoPlayDelay={3}
      />
      <div style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>
        <h2>Explore Our Art</h2>
      </div>
      <div className="circle-images-container">
      <div className="circle-image-container">
        <img src={p1} alt="Paintings" className="circle-image" />
        <p>Paintings</p>
      </div>
      <div className="circle-image-container">
        <img src={s1} alt="Sculptures" className="circle-image" />
        <p>Sculptures</p>
      </div>
      <div className="circle-image-container">
        <img src={p2} alt="Drawings" className="circle-image" />
        <p>Drawings</p>
      </div>
      <div style={{ fontSize: "1.5rem" }}>
      </div>
    </div>
</div>
  );
      }
    

export default ImageSlider;




