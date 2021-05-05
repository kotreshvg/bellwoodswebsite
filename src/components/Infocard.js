import React from 'react';
import "./infocard.css";
import different from "./different.jpg";
import Aos from 'aos';
import 'aos/dist/aos.css';

Aos.init();

function Infocard() {
    return (
        <div className="block" >
           <img data-aos='fade-up' data-aos-duration='2000' data-aos-anchor-placement='bottom-bottom' className="block_image" src={different} alt="..."/>            
            <div className="cardinfo">
            <div id="s"></div>
                <h4>what we bring to table</h4>
                <p>we the Bellwood team committe to quality products and manufacturing methods at premimum price segment,
                    we aim to provide customers with greater control over material quality and design offering that custom suite
                     their requirements, <br/>
                     many occasions customers say they are unsure about the product material and how long they last,<br/> 
                     we take this
                      uncertaininty off with out ace quality control and guarrantee certification.
                </p>
                <ul
                data-aos='fade-right' data-aos-duration='2000' data-aos-anchor-placement='bottom-bottom'>
                          <li>control of material selection to customers</li>
                          <li>best manufacturing methods involving machine grade aesthetic finish</li>
                          <li>home delivery and product inspection after 15 days of delivery</li>
                          <li>gurranttee certificate</li>
                          <li>yearly servicing at minimal cost (on request)</li>
                </ul>
            </div>
        </div>
    )
}

export default Infocard
