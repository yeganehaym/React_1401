import {useState} from "react";
import {addProduct} from "./Services/ProductService";
import {toast} from "react-toastify"
export const NewProduct=()=>{

    const [product,setProduct]=useState({
        name:'',
        description:'',
        price:0,
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
            const result=await addProduct(product);
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
            <label>Product Category</label>
            <input type={"text"} className="form-control" value={product.category} name="category" onInput={e=>setValue(e.target)} />
        </div>
        <div className={"form-group"}>
            <button className="btn btn-primary" type="submit">Insert</button>
        </div>

    </form>
    </>)
}