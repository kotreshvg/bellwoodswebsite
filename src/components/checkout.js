import React, { PureComponent } from 'react';
import './checkout.css';
import axios from 'axios';

class Checkout extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            final_price:props.order.final_price,
            product_id : props.order.product_id,
            product_name : props.order.product_name,
            material_selected : props.order.material_selected,
            color_selected : props.order.color_selected,
            selected_payment : props.order.final_price
        }
    }
    componentDidMount() {
        const Razorpay = document.createElement("script");
        Razorpay.src = "https://checkout.razorpay.com/v1/checkout.js";
        Razorpay.async = true;
        document.head.appendChild(Razorpay);
    }
    pay=()=>{
        var rzp1;
        axios.post('http://localhost:8000/order/create',{
            amount : this.state.selected_payment*100,
            product_id : this.state.product_id,
            user_id : "kjajdhf",
            notes : {
                "hey": 'hello'
            }
        }).then((res)=>{
            var options = {
                "key": "rzp_test_jIXgi5QQd9yr3s", // Enter the Key ID generated from the Dashboard
                "amount": `${res.data.amount}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                "currency": "INR",
                "name": "Bellwoods",
                "description": "Test Transaction",
                //"image": "https://example.com/your_logo",
                "order_id": `${res.data.id}`, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
                "handler": function (response){
                        console.log(response.razorpay_payment_id);
                        console.log(response.razorpay_order_id);
                        console.log(response.razorpay_signature);
                    axios.post('http://localhost:8000/order/verify',{
                        razorpay_payment_id : response.razorpay_payment_id,
                        order_id : res.data.id,
                        razorpay_signature : response.razorpay_signature,
                        order_placed : response.razorpay_order_id
                    }).then((resp)=>{
                        alert(resp.data);
                    })
                    
                },
                "prefill": {
                    "name": "Gaurav Kumar",
                    "email": "gaurav.kumar@example.com",
                    "contact": "9999999999"
                },
                "notes": {
                    "address": "Razorpay Corporate Office"
                },
                "theme": {
                    "color": "#3399cc"
                }
            };
            rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
        }).then(()=>{rzp1.open();})
    }

    pay_option=(option)=>{
        let price = this.state.final_price*option;
        this.setState({...this.state,
        selected_payment:price});
    }

    render() {
        return (
            <React.Fragment>
                <div className='checkout_wrapper'>
                    <div className='checkout_headbar'></div>
                    <div className='checkout_info'>
                        <img src='' alt=''/>
                        <div className='details'>
                            <h6> {this.state.product_name}</h6>
                            <h6>Order price : {this.state.final_price} <i className="fa fa-inr" aria-hidden="true" /> </h6>
                            <h6>material : {this.state.material_selected}</h6>
                            <h6>color : {this.state.color_selected} </h6>
                            <div className='customer_info'>
                                <input placeholder='mobile' name='mobile' />
                                <textarea className='address' placeholder='address' name='address' />
                            </div>
                            <div className='payment_options'>
                                <ul>
                                    <li onClick={()=>this.pay_option(0.25)}>PAY 25% <br/><span>(0% cashback)</span></li>
                                    <li onClick={()=>this.pay_option(0.5)}>PAY 50%  <br/><span>(2% cashback)</span></li>
                                    <li onClick={()=>this.pay_option(1)}>PAY 100%  <br/><span>(5% cashback)</span></li>
                                </ul>
                                <div className='payment_button' onClick={this.pay}> PAY NOW {this.state.selected_payment} 
                                    <i className="fa fa-inr" aria-hidden="true" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Checkout