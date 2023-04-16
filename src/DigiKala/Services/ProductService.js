import axios from "axios";
export const addProduct=async (product)=>{
    const result=await axios.post('http://localhost:3500/products',product)
    return result;
}

export const getProducts=async ()=>{
    const {data}=await axios.get('http://localhost:3500/products');
    return data;
}