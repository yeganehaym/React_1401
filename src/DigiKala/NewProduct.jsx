import {useEffect, useState} from "react";
import {addProduct} from "./Services/ProductService";
import {toast} from "react-toastify"
import {useParams} from "react-router-dom";
import {getProduct,updateProduct} from "./Services/ProductService";
export const NewProduct=()=>{


    const  params=useParams();

    const [productId,setProductId]=useState(0);
    useEffect(()=>{
        console.log(params);
        setProductId(params.id);

        const fetchProduct=async ()=>{
            const {data}=await getProduct(params.id);
            setProduct(data);
        }

        fetchProduct();

    },[])
    const [product,setProduct]=useState({
        name:'',
        description:'',
        price:0,
        finalPrice:0,
        image:'',
        category:''
    })

    const [message,setMessage]=useState(null);

    const setValue=target=>{
        const {name,value}=target;
        const p={...product};
        p[name]=value;
        setProduct(p);
    }

    const submit=async e=>{
        e.preventDefault();

        try{
            const result=productId >0? await updateProduct(product): await addProduct(product);
            console.log(result);

            setMessage("محصول مورد نظر با موفقیت ثبت گردید");
            toast.success("محصول مورد نظر با موفقیت ثبت گردید",{
                autoClose:true,
                rtl:true,
                position:'bottom-right',

            });

        }
        catch (e) {
          if(e.response.status==400)
          {
              toast.error(e.response.data.error,{
                  autoClose:true,
                 rtl:true,
                 position:'bottom-right',

              });
          }
        }

    }
    return (<>
    <form method="post" onSubmit={e=> submit(e)}>

        {
            message!=null && <div className="alert alert-success">{message}</div>
        }
        <div className={"form-group"}>
            <label>Product Image</label>
            <input type={"text"} className="form-control" value={product.image} name="image" onInput={e=>setValue(e.target)} />
        </div>

        <div className={"form-group"}>
            <label>Product Name</label>
            <input type={"text"} className="form-control" value={product.name} name="name" onInput={e=>setValue(e.target)} />
        </div>

        <div className={"form-group"}>
            <label>Product Description</label>
            <input type={"text"} className="form-control" value={product.description} name="description" onInput={e=>setValue(e.target)} />
        </div>
        <div className={"form-group"}>
            <label>Product Price</label>
            <input type={"text"} className="form-control" value={product.price} name="price" onInput={e=>setValue(e.target)} />
        </div>

        <div className={"form-group"}>
            <label>Final Price</label>
            <input type={"text"} className="form-control" value={product.finalPrice} name="finalPrice" onInput={e=>setValue(e.target)} />
        </div>

        <div className={"form-group"}>
            <label>Product Category</label>
            <input type={"text"} className="form-control" value={product.category} name="category" onInput={e=>setValue(e.target)} />
        </div>
        <div className={"form-group"}>
            <button className="btn btn-primary" type="submit">{
                productId>0?<span>Update</span>:<span>Insert</span>
            }</button>
        </div>

    </form>
    </>)
}