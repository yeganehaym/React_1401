import React,{ Component } from "react";
import OrderItem from "./OrderItem";
import 'bootstrap/dist/css/bootstrap.min.css'
import './DisplayOrders.css'

export default class DisplayOrders extends Component
{
   
    addNewOrder=()=>{
        const o3=new OrderItem();
        o3.productName='Speaker';
        o3.price=3000;
        o3.quantity=4;
        o3.discount=4000;

        const items=[...this.state.orderItems];
        items.push(o3);

        const person={
            name:'ali',
            'lastname':'hassani'
        }
        
        const person2={...person};
        
        this.setState({orderItems:items})
        

    }

    state={
        orderItems:[]//[new OrderItem('LG TV',500000,5000,5),new OrderItem('Mouse',1400000,25000,10)]

    }

    render=()=>{

       

        
        
        return (
            <React.Fragment>
                <button className="btn btn-primary" onClick={this.addNewOrder} >Add New Product</button>
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Discount</th>
                            <th>Final Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.orderItems.map(item=><tr>
                            <td>{item.productName}</td>
                            <td>{item.price}</td>
                            <td>{item.quantity}</td>
                            <td>{item.discount}</td>
                            <td>{item.finalPrice()}</td>
                        </tr>)
                    }
                    </tbody>
                </table>
            </React.Fragment>
        )
    }
}