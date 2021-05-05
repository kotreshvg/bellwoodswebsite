import React from 'react'
import websiteimage from "./website-wallpaper.jpg";
import "./home_card.css";
import logo from './red-BELLWOODS.png';
function Home_Card() {
    return (<div className="card bg-white text-white w-100" >
    <img className="card-img mx-auto " src={websiteimage} alt="opack logo" />
    <div className="card-img-overlay">
      <div className="home-card card-title">
        <img src={logo} />
        <div>
        <h5 >Bellwoods</h5>
        <h6 > Affordable | Quality | Luxury</h6>
        </div>
      </div>
      <h5 className="hcard-text"> Interior and Furnitures</h5>
      <p className="card-text" id="a1">We Bellwood team, design-craft and manufacture cost effective 
      home and office furnitures<br/> with the best quality assured material of your choice,
       we take pride in developing and sustaining best product quality.</p>
    </div>
  </div>
        
    )
}

export default Home_Card
