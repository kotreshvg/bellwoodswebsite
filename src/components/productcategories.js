import React from 'react';
import chairimg from './chair.jpg';
import bed from './bed.jpg';
import sofa from './sofa.jpg';
import dine from './dine-tab.jpg';
import table from './table.jpg';
import "./productscategory.css";

function Productcategories() {
    return (
        <div className="card-deck">
  <div className="card" >
    <img className="card-img-top" src={chairimg} alt="white chair image"/>
    <div className="card-body">
      <h5 className="card-title">chairs</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
  </div>
  <div className="card" >
    <img className="card-img-top " src={bed} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">beds</h5>
      <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      
    </div>
  </div>
  <div className="card" >
    <img className="card-img-top " src={sofa} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">sofa</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
  <div className="card" >
    <img className="card-img-top " src={dine} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">dine tables</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
  <div className="card" >
    <img className="card-img-top " src={table} alt="Card image cap" />
    <div className="card-body">
      <h5 className="card-title">tables</h5>
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      
    </div>
  </div>
</div>
    )
}

export default Productcategories
