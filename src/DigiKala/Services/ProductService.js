import axios from "axios";
export const addProduct=async (product)=>{
    const result=await axios.post('http://localhost:3500/products',product)
    return result;
}

export const getProducts=async ()=>{
    const {data}=await axios.get('http://localhost:3500/products');
    return data;
}

export const removeProduct=async (id)=>{
    const result=await axios.delete('http://localhost:3500/products/' + id);
    return result;
}

export const getProduct=async (id)=>{
    const result=await axios.get('http://localhost:3500/products/' + id);
    return result;
}

export const updateProduct=async (product)=>{
    const result=await axios.put('http://localhost:3500/products/'+product.id,product)
    return result;
}