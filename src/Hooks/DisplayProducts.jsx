import {Component} from "react";
import {ProductService} from "./ProductService";
import ProductBox from "../Products/ProductBox";

export default class DisplayProducts extends Component{

    state={
        products:[],
        page:1
    }
    constructor() {
        super();
       // this.state.products=[{id:1,title:'TV'}]

    }

    productService=new ProductService();

    componentDidMount() {

        this.fetchProducts();

    }

    componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS) {

        if(this.state.page!=prevState.page)
        {
            this.fetchProducts();
        }

    }

    fetchProducts=()=>{
        const newProducts=this.productService.getProducts(this.state.page);
        const products=[...this.state.products,...newProducts];


        console.log(products);

        this.setState({products})
    }

    nextPage=()=>{
        let page=this.state.page;
        page++;
        this.setState({page})
    }

    prevPage=()=>{
        let page=this.state.page;
        page--;
        this.setState({page})
    }
    render=()=>{
        return (<>
            <div className="row">

                {
                    this.state.products.map(p=><ProductBox key={p.id} mahsool={p} />)
                }
            </div>
            <div className="row" style={{marginTop:'15px'}}>
                <button className="btn btn-danger" type="button" onClick={()=>this.nextPage()}>Next Page</button>
            </div>
        </>)
    }
}