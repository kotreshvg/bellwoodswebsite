import React from "react";
import './App.css';
import Home_Card from "./components/home_card";
import Infocard from "./components/Infocard";
import Footer from "./components/footer";
import Productcategories from "./components/productcategories";
import Profile from './components/profile';
import Requestbuild from "./components/requestbuild";
import Login from "./components/Login";
import Interiocarosal from "./components/interio-carosal";
import logo from './components/red-BELLWOODS.png';

function App() {
  return (
    <div className="App">
      <div >
        <div className='header-tab'>
        <img className='tab-logo' src={logo} alt='logo' />
        <Login/>
        </div>
        <input className='search-tab' placeholder='search for items' />
      </div>
     <ul className="nav nav-tabs" id="myTab" role="tablist">
  <li className="nav-item">
    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div className="tab-content" id="myTabContent">
  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
    <Home_Card/>
    <Interiocarosal />
    <Productcategories/>
    <Infocard/>
    <Footer/>
    
  </div>
  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
    <Profile/>
    <Requestbuild/>
  </div>
  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
</div>
</div>
  );
}

export default App;
