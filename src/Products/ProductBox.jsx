import {Component} from "react";
import Product from "./Product";

export default class ProductBox extends Component{


    showDiscount=discount=>{
        if(discount>0)
        {
            return <span className="badge text-bg-danger">{discount} %</span>
        }


    }

    render=()=>{
        return (<>
            <div className="card" style={{width:'18rem'}}>
                <img className="card-img-top" src={this.props.mahsool.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.mahsool.name}</h5>
                        <p className="card-text">{this.props.mahsool.discount>0? <s>{this.props.mahsool.price}</s>:<span>{this.props.mahsool.price}</span>}
                            {this.showDiscount(this.props.mahsool.discount)}
                            {this.props.mahsool.discount>0 && <span className="badge text-bg-danger">{this.props.mahsool.discount} %</span>}
                            <br/>

                        </p>
                        <a href="src#" className="btn btn-primary">مشاهده محصول</a>
                    </div>
            </div>
        </>)
    }
}