import React from 'react';
import Feedbackform from './feedback'; 
import './footer.css'
function Footer() {
    return (
        <div className="footer_ w-100">
            <div id="contact">
                <h4>conect with us</h4>
            </div>
            <div className="feed">
            <Feedbackform/>
            
            <div className="emailinfo float-right">
                <label className="text-secondary">Email ID</label>
                <p >nimmabellwoods@gmail.com</p>
            </div>
            </div>
        </div>
    )
}

export default Footer
