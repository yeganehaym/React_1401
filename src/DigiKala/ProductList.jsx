import {useEffect, useState} from "react";
import {getProducts,removeProduct} from "./Services/ProductService";
import {toast} from 'react-toastify'
import {Link,useNavigate} from "react-router-dom";
export const ProductList=()=>{

    const [products,setProducts]=useState([]);
    const [filteredProducts,setFilteredProducts]=useState([]);
    const [search,setSearch]=useState('');

    useEffect(()=>{

        fetch=async ()=>{
            const data=await getProducts();
            console.log(data)
            setProducts(data);
            setFilteredProducts(data);
        }
        fetch();
    },[])

    const Delete=async (id)=>{
        try{
            const result=await removeProduct(id);
            console.log(result);

            if(result.status==204)
            {
                toast.success("محصول مورد نظر با موفقیت حذف شد");
                let p=[...products];
                p=p.filter(m=>m.id!=id);
                setProducts(p);
                setFilteredProducts(p);
            }
        }
        catch (e)
        {
            console.log(e);
            toast.error("محصول مورد نظر یافت نشد");
        }
    }

    const navigate=useNavigate();
    const Edit=id=>{
        navigate("/admin/products/update/" + id);
    }

    const Filter=value=>{
        setSearch(value);
        let p=[...products];
        p=p.filter(m=>m.name.toLowerCase().indexOf(value.toLowerCase())>-1 ||  m.description.toLowerCase().indexOf(value.toLowerCase())>-1);
        setFilteredProducts(p);
    }

    const colorize=text=>{

        if(search=='')
            return  text;
        const index=text.toLowerCase().indexOf(search);
        const len=search.length;
        console.log(index);

        if(index>-1)
        {
            const part=text.substring(0,index);
            const part2='<span style="background-color:yellow">' + text.substring(index,index+len) + '</span>';
            const part3=text.substring(index + len);


            return  <div contentEditable='true' dangerouslySetInnerHTML={{ __html:part + part2 + part3 }}></div>
        }

        return text;
    }
    return(<>

        <input type="text" className="form-control" name="search" value={search} onInput={e=> Filter(e.target.value)} />
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
            filteredProducts.map(p=><tr>
                <td>{colorize(p.name)}</td>
                <td>{colorize(p.description)}</td>
                <td>{p.price}</td>
                <td>{p.category}</td>
                <td>
                    {
                        /*<Link to={"/admin/products/update/"+ p.id} className="btn btn-warning">Edit</Link>*/
                    }
                    <button className="btn btn-warning" onClick={()=> Edit(p.id)}>Edit</button>
                    <button className="btn btn-danger" onClick={()=> Delete(p.id)}>Delete</button>
                </td>
            </tr>)
        }
        </tbody>
    </table>
    </>)
}