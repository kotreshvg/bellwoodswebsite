import React, { PureComponent, Suspense } from 'react';
import './items.css';
const axios= require('axios');

const Checkout = React.lazy(()=>import('./checkout'));

class Items extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            item:'',
            category:props.category,
            itemselected:null,
            itemlist:[]
        }
        
    }
    selectitem=(item)=>{
        this.setState({...this.state,
        itemselected:item});
    }
     componentDidUpdate(prevProps){
         var URI="http://localhost:8000/product/find/"
         if(prevProps!=this.props){
             axios.post(URI,{
                 'category':'teak'
             }).then(res=>this.setState({...this.state,
                 itemlist:res.data,
                itemselected:null},
                console.log('items list updated '+this.props.category)))
             .catch(err=>alert(err));
         }
     }
     componentDidMount() {
        var URI="http://localhost:8000/product/find/";
        axios.post(URI,{
            'category':'teak'
        }).then(res=>this.setState({...this.state, itemlist:res.data},
           console.log('items list chosen '+this.props.category)))
        .catch(err=>alert(err));
     }
    /*list= ()=>{
        var item = this.state.itemlist.map((item)=><div className='item' key={item.id}>{item}</div> )
        return item
    };*/

    render() {
        console.log('item list rendred');
        var itemlist = this.state.itemlist.map((item)=>
        <div className='item' key={item._id} onClick={()=>this.selectitem(item._id)}>
            <div className='contents'>
                <img src='' alt='image' className="product_img" />
                <div className='info'>
                <h5 className='product_name'> {item.product_name}</h5>
                <h6 className='product_cost'>{Object.keys(item.price)[0]} : {Object.values(item.price)[0]} 
                <i className="fa fa-inr" aria-hidden="true"></i></h6>
                <p className='product_description'>{item.description.substring(0,40)}...</p>
                </div>
            </div>
            <ul className='cart_buy'>
                <li>add to cart <i className="fa">&#xf23d;</i></li>
                <li>buy now <i className="fa">&#xf09d;</i></li>
            </ul>
        </div> )
        if (this.state.itemselected===null){
        return (<div className='items_wrapper'>
            {itemlist}
            </div>
        )
        }else if(this.state.itemselected!=null){
          return  <Selecteditem Selecteditem={this.state.itemselected} />
        }
    }
}

class Selecteditem extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            item_id:props.Selecteditem,
            item_name:null,
            colors:[],
            price:null,
            materials:[],
            description:null,
            gallery:[],
            material_selected:null,
            color_selected:null,
            final_price:0,
            Checkout:false
        }
    }
    componentDidMount() {
        axios.get(`http://localhost:8000/product/${this.state.item_id}`)
        .then(res=>{
            this.setState({...this.state,
            item_name:res.data.product_name,
            colors  :   res.data.color,
            price   :   res.data.price,
            materials : res.data.material,
            description :  res.data.description,
            gallery :   res.data.description})
        }).then(()=>console.log(this.state.materials))
    }
    selected=(e)=>{
        this.setState({...this.state,
        [e.target.name]:[e.target.value]},
        ()=>{
            let final_price=0;
            if(this.state.material_selected!=null){
                final_price+=this.state.price[this.state.material_selected]||0;
            }
            if(this.state.color_selected!=null){
                final_price+=this.state.price[this.state.color_selected]||0;
            }
            this.setState({...this.state,
            final_price:final_price},()=>console.log(this.state.final_price))
        })
    } 
    checkout=()=>{
        let checkout=null;
        this.state.Checkout===false ? checkout=true: checkout=false;
        this.setState({...this.state,
        Checkout:checkout});
    }   

    render() {
        var order_details={
            product_id:this.state.Selecteditem,
            product_name:this.state.item_name,
            material_selected: this.state.material_selected,
            color_selected : this.state.color_selected,
            final_price : this.state.final_price
        }
        var material_list = this.state.materials.map(
            material=>
                <option key={material} value={material} >{material}</option>
        )
        var color_list = this.state.colors.map(
            color=>
                <option key={color} value={color}> {color}</option>
        )
        if(this.state.Checkout===false){
        return (
            <React.Fragment>
                <div className='head_bar'></div>
                <div className='product_display'>
                    <div className='image_buttons'>
                        <img src='' alt='' />
                        <ul className='cartbuy'>
                            <li>Add to CART</li>
                            <li onClick={this.checkout}>BUY NOW</li>
                        </ul>
                    </div>
                    <div className='product_info'>
                        <h5>{this.state.item_name}</h5>
                        <h6>{this.state.final_price} <i className="fa fa-inr" aria-hidden="true" /></h6>
                        <div className='selection_bar'>
                            <div className='material_selection'>
                                <label>material avilable</label>
                                <select name='material_selected' onChange={this.selected}>
                                    <option value='teak'>select material</option>
                                    {material_list}
                                </select>
                            </div>
                            <div className='color_selection'>
                                <label>colors available</label>
                                <select name='color_selected' onChange={this.selected}>
                                    <option value='brown'>select color</option>
                                    {color_list}
                                </select>
                            </div>
                            <div className='location'>
                                <label>we are available in all neighbourhood</label>
                                <select>
                                    <option value='Davanagere'>davanagere</option>
                                    <option value='Hubli-Dharavad'>Hubli-Dharavad</option>
                                    <option value='Chitradurga'>Chitradurga</option>
                                    <option value='Haveri'>Haveri</option>
                                    <option value='Shivamogga'>Shivamogga</option>
                                </select>
                            </div>
                        </div>
                        <div className='offers'>
                            <h6>offers available</h6>
                        <p><i className="fa fa-tag" aria-hidden="true" /></p>
                        <p><i className="fa fa-tag" aria-hidden="true" /></p>
                        <p><i className="fa fa-tag" aria-hidden="true" /></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )}else if(this.state.Checkout===true){
            return (
                <Suspense fallback={<div>Loading...</div>} >
                    <Checkout order={order_details} />
                </Suspense>
            )
        }
    }
}

export default Items