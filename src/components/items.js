import React, { PureComponent } from 'react';
import './items.css';
const axios= require('axios');

class Items extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            item:'',
            itemlist:[]
        }
        
    }
     componentDidUpdate(prevProps){
         var URI="http://localhost:8000/product/"
         if(prevProps!=this.props){
             axios.post(URI,{
                 'category':'teak'
             }).then(res=>this.setState({...this.state, itemlist:res.data}))
             .catch(err=>alert(err));
         }
     }
    /*list= ()=>{
        var item = this.state.itemlist.map((item)=><div className='item' key={item.id}>{item}</div> )
        return item
    };*/

    render() {
        var itemlist = this.state.itemlist.map((item)=>
        <div className='item' key={item._id}>
            <div className='contents'>
                <img src='' alt='image' className="product_img" />
                <div className='info'>
                <h5 className='product_name'> product name</h5>
                <p className='product_description'>product description </p>
                <h6 className='product_cost'>cost of the product</h6>
                <div>{item.product_name}</div>
                </div>
            </div>
            <ul className='cart_buy'>
                <li>add to cart <i className="fa">&#xf23d;</i></li>
                <li>buy now <i className="fa">&#xf09d;</i></li>
            </ul>
        </div> )

        return (<div className='items_wrapper'>
            {itemlist}
            </div>
        )
    }
}

export default Items