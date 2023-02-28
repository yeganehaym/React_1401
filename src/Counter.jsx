import {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
export default class Counter extends Component
{
    state={
        count:this.props.initVal,
        step:this.props.step
    }

    up=()=>{
        let i=this.state.count;
        i+=this.state.step;
        this.setState({count:i})
    }

    down=()=>{
        let i=this.state.count;
        if(i==0)
            return;

        i-=this.state.step;
        this.setState({count:i})
    }

    zero=(i)=>{
        if(i==0)
            return <span className={"badge text-bg-danger"}>Zero</span>

        return <span className={"badge text-bg-primary"}>Count : {i}</span>
    }
    render=()=>{
        return(<>
            <p className={"alert alert-info"}>{this.zero(this.state.count)}</p><br/>
        <button className="btn btn-success" onClick={this.up}>UP</button>
        <button className="btn btn-danger" onClick={this.down}>Down</button>
        </>)
    }
}