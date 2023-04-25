import {useEffect, useState} from "react";
import {ProductBox} from "./ProductBox";
import {getProducts} from "./Services/ProductService";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const UserProducts=()=>{

    /*const [products,setProducts]=useState([
        {
            id:1,
            title:'لپ تاپ ۱۴ اینچی دل مدل vostro 5471',
            price:17500000,
            finalPrice:1700000,
            image:'482250-200x200.jpg'
        },
        {
            id:2,
            title:'لپ تاپ ۱۵ اینچی دل مدل XPS 15-9560',
            price:1500000000,
            finalPrice:1450000000,
            image:'19a2cc-200x200.jpg'
        },
        {
            id:3,
            title:'لپ تاپ ۱۵ اینچی دل مدل INSPIRON 15-3567 - I',
            price:450000000,
            finalPrice:430000000,
            image:'13351544.jpg'
        },
        {
            id:4,
            title:'لپ تاپ ۱۵ اینچی دل مدل INSPIRON 7577 - D',
            price:520000000,
            finalPrice:54000000,
            image:'692674-200x200.jpg'
        },
    ]);*/

    const [products,setProducts]=useState([]);

    useEffect(()=>{

        const fetchProducts=async ()=>{
            const result=await getProducts();
            setProducts(result);
        }

        fetchProducts();
    },[]);


    return(<>
        <div className="row">
            <div className="col-12">
                <div className="widget widget-product card">
                    <header className="card-header">
                        <h3 className="card-title">
                            <span>کامپیوتر و لوازم جانبی</span>
                        </h3>
                        <a href="#">مشاهده همه</a>
                    </header>
                    <div className="product-carousel " style={{display:'flex'}}>
                        {
                            products.map(p=> <ProductBox key={p.id} title={p.name} price={p.price} finalPrice={p.finalPrice} image={p.image} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default UserProducts;