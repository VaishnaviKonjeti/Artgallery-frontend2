import './Navbar.css';
import Logo from './logo.png'; 
import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div>
<head>
<title>Document</title>
</head>
<body>
<nav class="navbar">
<div className="logo">
<img src={Logo} alt="Art Gallery Logo" />
</div>
<ul class="nav-links">
<div class="menu">
<li><a href="/">Home</a></li>
<li><a href="/Artist">Artists</a></li>
<li class="services">
<a>Gallery</a>
<ul class="dropdown">
<li><a href="/Paintings">Paintings</a></li>
<li><a href="/Drawings">Drawings</a></li>
<li><a href="/Sculptures">sculptures</a></li>
</ul>
</li>
<li><a href="/Exhibitions">Exhibitions</a></li>
<li><a href="/About">About Us</a></li>
<li><a href="/ContactUs">Contact Us</a></li>

<li><a href="/Loginform">Login</a></li>
</div>
</ul>
</nav>
 </body>     
        </div>
    );
}