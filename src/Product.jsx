import react,{Component} from 'react'
import Test from './Test'
import ProductC from './math'

export default class Product extends Component
{

 pc=new ProductC();
 pc2=new ProductC();
    sum=(a,b)=>{
       
        return a+b;
        
    }

    sum2=(a,b)=>a+b;



    render(){

        this.pc.name='lcd';
        this.pc.price=11500000;
       this.pc.discount=40000;

        return (
            <>
            <h1>Product</h1>
            <p>Name : {this.pc.name}</p>
            <span>Final Price : {this.pc.FinalPrice()}</span><br/>
            <span>{this.pc.Sum(2,2)}</span>
            <br/>
            <span>{this.pc2.Multiply(6,3)}</span>
            <Test/>
            </>
        )
    }
}