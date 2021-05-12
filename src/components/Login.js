import React, { useState } from 'react';
import './login.css';

const axios= require('axios');

function Login() {
  var [signup, setval]=useState({
    signup_password:'',
    signup_username:'',
    signup_mobile:null,
    signup_email:'',
    pin   :null,
    district:'',
    taluk:'',
    city:'',
    location:''
  })

  const handlepassword=(e)=>{
    setval({
      ...signup,
      [e.target.name]:e.target.value
    })
  }

  const signupnew=()=>{
    alert(signup.signup_username);
    var URI="https://bellwoodsbackend.herokuapp.com/users/";
    axios.post(URI,{
      'username':signup.signup_username,
      'mobile':signup.signup_mobile,
      'password':signup.signup_password,
      'email':signup.signup_email,
      'address':{
        'pin':signup.pin,
        'district':signup.district,
        'taluk':signup.taluk,
        'city':signup.city,
        'location':signup.location
      }
    }).then(Response=>alert(Response.data)).catch(err=>alert(err))
  }
  //-------------------------------------------------------------------
var [visible,setvisible]=useState('hide');

function toggle(){
  visible==''? setvisible('hide') : setvisible(''); 
}
function prevvisible() {
  if(visible===''){
    return 'hide';
  }
  return '';
}
//-------------------------------------------------------------------
var [first, setfirst] = useState('');
function address() {
  first===''? setfirst('complete'): setfirst('');
}
function show() {
  if(first==='complete'){
     return 'hide' ;
  }
   return '';
}
function hide() {
  if(first==='complete'){
    return '' ;
 }
  return 'hide';
}

  return (<div>
    <i onClick={toggle} className={`fa menu ${prevvisible()}`}>&#xf2be;login</i>
<div className={`container ${visible}`}>

      <div className="callout" onClick={toggle}>
          <span aria-hidden="true">&times;</span>
     </div>
   <nav>
          <div className="nav nav-tabs" id="nav-tab" role="tablist">
            <a className="col-sm nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">login</a>
            <a className="col-sm nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">sign up</a>
          </div>
   </nav>
  <div className='tab-content' id="nav-tabContent">
    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div>
              <label><i className="fa">&#xf2c0;</i></label><br/>
              <input type="" placeholder="username" className="login-input" name="username" ></input>
            </div>
            <div>
              <label><i className="fa fa-key"></i></label><br/>
              <input type="password" placeholder="password" className="loginpassword" name="password"></input>
            </div>
            <div className="button">sign in <i className="fa">&#xf1d8;</i></div>
    </div>

    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
      <div className='progress'>
        <div>
          <i id={first} style={{'fontSize':20+'px'}} className="fa">&#xf138;</i>
          </div>
          <div>
          <i style={{'fontSize':20+'px'}} className="fa">&#xf138;</i>
          </div>
      </div>

      <div className={`${hide()} adress-query`}>
      <div><br/>
          <textarea type="" placeholder='location' className="house-input" onChange={handlepassword} name="location" />
        </div>
        <div><br/>
            <input type="" placeholder="city / locality" className="city" onChange={handlepassword} name="city" />
        </div>
        <div><br/>
            <input type="" placeholder="taluk" className="taluk" onChange={handlepassword} name="taluk" />
        </div>
        <div><br/>
            <input type="" placeholder="district" onChange={handlepassword} name="district" />
        </div>
        <div><br/>
          <input type='number' onChange={handlepassword} placeholder='pin' name='pin' />
        </div>
        <div className="button" onClick={signupnew}>sign up <i className="fa">&#xf1d8;</i></div>
        <div onClick={address} className="button">previous</div>
      </div>
      
      <div className={show()} id="signup">
        <div>
          <label><i className="fa">&#xf2c0;</i></label><br/>
          <input type="" placeholder='User name' className="signup-input" name="signup_username" onChange={handlepassword}/>
        </div>
        <div>
          <label><i style={{'fontSize':20+'px'}} className="fa">&#xf10b;</i></label><br/>
            <input type="number" placeholder="mobile number" className="signup-mobile" name="signup_mobile" onChange={handlepassword}/>
        </div>
        <div>
          <label><i className="fa fa-envelope"></i></label><br/>
            <input type="email" placeholder="email address" className="signup-email" name="signup_email" onChange={handlepassword} />
        </div>
        <div>
          <label><i className="fa fa-key"></i></label><br/>
            <input type="password" placeholder="create new password" className="signup-password" name="signup_password" onChange={handlepassword} />
        </div>
        <div>
          <label><i className="fa fa-key"></i></label><br/>
            <input type="password" placeholder="confirm password" className="signup-password" name="signup-password"></input>
        
        </div>
        <div onClick={address} className="button">next <i className="fa">&#xf1d8;</i></div>
      </div>
  </div>
</div>
</div>
</div>
  );
}

export default Login;
