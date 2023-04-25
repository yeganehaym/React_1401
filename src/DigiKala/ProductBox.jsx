export const ProductBox=(props)=>{
    return (
        <>
        <div className="item">
            <a href="">
            <img style={{maxWidth:'200px'}} src={"/assets/img/product/" + props.image}
                 className="img-fluid" alt="" />
        </a>
        <h2 className="post-title">
            <a href="#">{props.title}</a>
        </h2>
        <div className="price">
            <div className="text-center">
                <del><span>{props.price}<span>تومان</span></span></del>
            </div>
            <div className="text-center">
                <ins><span>{props.finalPrice}<span>تومان</span></span></ins>
            </div>
        </div>
        </div>
        </>
    )
}