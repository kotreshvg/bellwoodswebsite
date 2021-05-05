import in1 from './images/interio1.jpg';
import in2 from "./images/interio2.jpg";
import in3 from "./images/interio3.jpg";
import in4 from "./images/interio4.jpg";
import "./interio.css";

import React, { Component, useState } from 'react'

class Interiocarosal extends Component {
    constructor(props) {
        super(props)
        this.state={
            pointer:0,
            images : [in1, in2, in3, in4]
        }
    }
    componentDidMount(){
        const increment=()=> {
            if(this.state.pointer===(this.state.images.length-1)){
                this.setState({
                    pointer:0
                })
            }
            else{
                this.setState({pointer:this.state.pointer+1})
                
            }
        }

        this.timer= setInterval(increment, 5000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    

    render() {

    return (
        <div className='carousal-element'>
            <img data-aos='fade-right' data-aos-duration='1000' data-aos-anchor-placement='top-bottom' className='carousal-images' src={this.state.images[this.state.pointer]} alt='carousal images' />
        </div>
    )
    }
}

export default Interiocarosal