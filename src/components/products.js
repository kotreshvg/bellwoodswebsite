import React, { PureComponent, Suspense } from 'react'
import './products.css';

const Itemslist = React.lazy(()=>import('./items'));

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
        this.setState({...this.state, category:category},
        ()=>{console.log('products state updated'+this.state.category);});
    }
    selectionstate=()=>{
        if(this.state.category===''){
            return null;
        }
        else if(this.state.category!=''){
            return (
                <Suspense fallback={<div>Loading...</div>}>
                <Itemslist category={this.state.category} />
                </Suspense>
            );
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
                {this.selectionstate()}                
            </div>
            </div>
        )
    }
}

export default selection_tab