import React, { PureComponent } from 'react'
import './products.css';
import Itemlist from './items';

class selection_tab extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            show:'hide',
            category:''
        }
        
    }
    visibility=()=> {
        if(this.state.show===''){
            this.setState({...this.state, show:'hide'})
        }else{
            this.setState({...this.state, show:''})
        }
    }
    sendprops=(category)=>{
        if(category==='beds'){
        this.setState({...this.state, category:'beds'});
    }
    if(category==='chairs'){
        this.setState({...this.state, category:'chairs'});
    }
    }

    render() {
        return (
            <div>
            <div className='selection_tab_wrapper'>
                <div className='furnitures_button' onClick={this.visibility}> Furnitures</div>
                <div className='interior_button'> Interiors</div>
            </div>
            <div className={`${this.state.show}`}>
                <ul className={`tab_list ${this.state.show} `} >
                    <li className="tab_element"  onClick={()=>this.sendprops('chairs')}>chairs</li>
                    <li className="tab_element" onClick={()=>this.sendprops('beds')}>beds</li>
                    <li className="tab_element"  onClick={()=>this.sendprops('dinner')}>dinner sets</li>
                    <li className="tab_element" onClick={()=>this.sendprops('sofa')}>sofa</li>                    
                </ul>
                <Itemlist category={this.state.category} />
            </div>
            </div>
        )
    }
}

export default selection_tab