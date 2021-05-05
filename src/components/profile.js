import React from 'react';
import profileimg from './profileimg.jpg';
import './profile.css'

function Profile() {
    return (
        <div >
            <div className="box">
            <img src={profileimg} alt="profile image"/>
            <h4>Bellwood team</h4>
            <p >
                offers comprehensive products spaning wide categories, we have experienced craftsmen
                 designing home <br/>and office furnitures, we deliver products that enhances your living atmosphere,<br/> 
                 our motto is to offer luxury products at premium price.
            </p>
            <h4 id="tag">
                "Architecture defines engineers, furnitures defines family."
            </h4>
            </div>
            <div className="box2" >
            <div className="goal">
                <h4>what are we working towards</h4>
                <p >
                    our team is working to solving the material quality problem and manufacturing technique,<br/>
                survey of online consumers have shown that, material quality assurance<br/>
                 is prime concern of a INDIAN consumer, <br/>
                 we also provide routine product service that can be ordered online after you purchase a product,<br/>
                 so that product can stay brand new for longer duration.
                </p>
            </div>
            <div className="mantra" >
                <h4>our mantra</h4>
                <p >Quality, Affordable, Luxury</p>
            </div>
            </div>
        </div>
    )
}

export default Profile
