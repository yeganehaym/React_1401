import {Component} from "react";
import Product from "./Product";
import ProductBox from "./ProductBox";

export default class ProductList  extends Component{


    state={
        products:[new Product(1,'Book',12000,10,'/images/book.webp'),
            new Product(2,'Laptop',5000000000,18,'/images/laptop.webp'),
            new Product(3,'Bag',3700000,12,'/images/bag.webp'),
            new Product(4,'Shoes',320000,0,'/images/shoes.webp'),
            new Product(5,'Watch',3300000,10,'/images/watch.webp')
        ]
    }
    render=()=>{
        return(<>
        <div className="row">

            {
                this.state.products.map(p=><ProductBox key={p.code} mahsool={p} />)
            }
        </div>
        </>)
    }
}