import {Component} from "react";
import Counter from "./Counter";

export default class Counters extends Component{

    state={
        counters:[0,10,0,50]
    }
    render=()=>{
        return (
            <>
                <Counter initVal={300} step={10} />
                {
                    this.state.counters.map(c=><Counter initVal={c} step={2} />)
                }
            </>
        )
    }
}