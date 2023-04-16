import {useEffect, useState} from "react";
import {getProducts} from "./Services/ProductService";
export const ProductList=()=>{

    const [products,setProducts]=useState([]);

    useEffect(()=>{

        fetch=async ()=>{
            const data=await getProducts();
            console.log(data)
            setProducts(data);
        }
        fetch();
    },[])

    return(<>
    <table className="table table-bordered table-striped">
        <thead>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
        {
            products.map(p=><tr>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>
                    <button className="btn btn-warning">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </td>
            </tr>)
        }
        </tbody>
    </table>
    </>)
}