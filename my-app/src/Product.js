import React, {Component} from 'react';
import Name from './Name';

class Products extends Component{
    printProduct(product){
        return "product Name: "+product.itemName+product.model;

    }
    
    render(){

        let myProduct ={itemName:'computer',model:'macbookpro'}
        return(
            <div>
                <h3><Name /></h3>
                {this.props.productName} <br/>
                Hello World:I'm inside Products <br/>
                {this.printProduct(myProduct)}<br/>

            </div>
        )
    }
}

export default Products;