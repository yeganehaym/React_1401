import {useEffect, useState} from "react";
import {getProducts} from "./Services/ProductService";

const Awesome=()=>{


    const [products,setProducts]=useState([]);

    useEffect(()=>{

        const fetchProducts=async ()=>{
            const result=await getProducts();
            setProducts(result);
        }

        fetchProducts();
    },[]);

    const Active=id=>{
        const copy=[...products];
        const activep=copy.find(i=>i.active==true);
        if(activep!=undefined)
            activep.active=false;
        const p=copy.find(i=>i.id==id);
        p.active=true;
        setProducts(copy);
    }
    return (
        <>
        <section id="amazing-slider" className="carousel slide carousel-fade card" data-ride="carousel">
            <div className="row m-0">
                <ol className="carousel-indicators pr-0 d-flex flex-column col-lg-3">

                    {
                        products.map(p=>  <li className={p.active?"active":""} onClick={()=> Active(p.id)} data-target="#amazing-slider" data-slide-to="0">
                            <span> {p.name} </span>
                        </li>
                        )
                    }
                   
                    
                    <li className="view-all">
                        <a href="" className="btn btn-primary btn-block hvr-sweep-to-left">
                        <i className="fa fa-arrow-left"></i>مشاهده همه شگفت انگیزها
                    </a>
                </li>
            </ol>
            <div className="carousel-inner p-0 col-12 col-lg-9">
                <img className="amazing-title" src="assets/img/amazing-slider/amazing-title-01.png"
                     alt="" />

                {
                    products.map(p=>
                        <div className={"carousel-item" + (p.active?"active":"")}>
                            <div className="row m-0">
                                <div className="right-col col-5 d-flex align-items-center">
                                    <a className="w-100 text-center" href="">
                                        <img src={"assets/img/product/" + p.image}
                                             className="img-fluid" alt="" />
                                    </a>
                                </div>
                                <div className="left-col col-7">
                                    <div className="price">
                                        <del><span>{p.price}<span>تومان</span></span></del>
                                        <ins><span>{p.finalPrice}<span>تومان</span></span></ins>
                                        <span className="discount-percent">3 % تخفیف</span>
                                    </div>
                                    <h2 className="product-title">
                                        <a href=""> {p.name} </a>
                                    </h2>
                                    <ul className="list-group">
                                        <li className="list-group-item">{p.description}</li>
                                    </ul>
                                    <hr />
                                    <div className="countdown-timer" countdown data-date="05 02 2019 20:20:22">
                                        <span data-days>0</span>:
                                        <span data-hours>0</span>:
                                        <span data-minutes>0</span>:
                                        <span data-seconds>0</span>
                                    </div>
                                    <div className="timer-title">زمان باقی مانده تا پایان سفارش</div>
                                </div>
                            </div>
                        </div>
                    )
                }




</div>
</div>
</section>
        </>
    )
}

export default Awesome;