import React, { Component } from 'react';
import './requestbuild.css';

var validator= require("email-validator");

const axios= require('axios');

class Requestbuild extends Component {
    constructor(props) {
        super(props);

        this.state = {
            file:null,
            username:null
        };
        this.onFileChange=this.onFileChange.bind(this);
        this.handleemailChange=this.handleemailChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);

    }
    onFileChange=(Event)=>{
        alert(Event.target.files[0].name);
        this.setState({file:Event.target.files[0]});
        
    };
    handleemailChange=(Event)=>{
       
            if(validator.validate(Event.target.value)){
                this.setState({ username:Event.target.value,});
                alert('email valid');
            }      
    }

    //@ validating and  sending request to server
    handleSubmit=(e)=> { 
        e.preventDefault();
        var URI='http://localhost:8000/requestbuild';
        const formData= new FormData();

        //email authorization and file check
        if(this.state.username==null && this.state.file==null){
            alert('please enter valid email address and select image');
        }
        else{
            //@ creating multipart data file
        formData.append(
            'user_file',this.state.file
        );

        //@ sending data to backend
        alert(this.state.file.name+'\n'+this.state.username);
        axios.post(URI, formData,{
            Headers:{
                'Content-Type':'multipart/form-data'
            },
        }).then(res=>alert(res))
        .catch(err=>alert('error. image upload failed \n Feel free to contact through email :)\n nimmabellwoods@gmail.com'))

        }

        
        /*axios({
            method:'post',
            url :URI,
            Headers:{
                'Content-Type':'multipart/form-data'
            },
            data:{
                file:formData,
                email:this.state.username
            }   
        })*/
                
    };

    render() {
        return (
        <div className="container1">
            <h4>you Send we Build</h4>
            <h5>something else in mind?</h5>
            <h5>try out new service..!!</h5>
            <ul>
                <li>take a pic of furniture you like</li>
                <li>upload it here in format</li>
                <li>we will connect with you for pricing</li>
            </ul>
            <div>
                <input type="email" className="email_input" placeholder="email ID" onChange={this.handleemailChange} />
            </div>
            <div className="input-group mb-3">
                <div className="custom-file">
                    <input type="file" className="custom-file-input" id="inputGroupFile02" name="user_file" 
                    onChange={this.onFileChange} />
                    <label className="custom-file-label">Choose file</label>
                </div>
                <div className="input-group-append">
                    <button className="input-group-text" id="" onClick={this.handleSubmit} >
                        Upload
                    </button>
                </div>
            </div>          
        </div>
        )
    }
}

export default Requestbuild