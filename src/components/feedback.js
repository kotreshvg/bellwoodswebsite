import React from 'react';
import './feedback.css';

const axios= require('axios');

function Feedbackform() {
    var suggestion, mob;

const handlechange=(e)=>{
    suggestion=e.target.value;
}
const number=(e)=>{
    mob=e.target.value;
}
const submit=()=>{
    var URI='http://localhost:8000/suggestion';
    alert(URI);
    axios.post(URI,{'suggestion':suggestion, 'mobile':mob})
    .then(Response=>alert(Response))
    .catch(err=>alert(err));
}


    return (
        <div className="feedback-form">
                <h5>help us grow. give feedback</h5>
            
            <div className="feedback-inputs">
                        <label>enter your suggestions</label>
                        <textarea className="" type="text" placeholder="feedback" onChange={handlechange}/>
                        <label>mobile</label>
                        <input className="" type="number" placeholder="mobile number" onChange={number}></input>
            </div>
            <div className="submit">
                    <p>thank you for your feedback</p>
                    <div onClick={submit} >submit</div>
            </div>
        </div>
    )
}

export default Feedbackform
