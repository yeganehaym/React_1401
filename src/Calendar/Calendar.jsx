import {Component} from "react";
import {CalendarService} from "./CalendarService";

export default class Calendar extends Component{

    state={
        year:1402,
        month:1,
        day:13,
        occasions:{}
    }

    calService=new CalendarService();

    setValue=target=>{
        const {name,value}=target;


        this.setState({[name]:value});
    }

    submit=async ()=>{
       const output=await this.calService.getOccasions(this.state.year,this.state.month,this.state.day);
        this.setState({occasions:output.data})



    }
    render() {
        return (
            <>
            <input type="text" className="form-control" name="year" value={this.state.year}
                   onChange={(input)=> this.setValue(input.target)} />

            <input type="text" className="form-control" name="month" value={this.state.month}
                   onChange={(input)=> this.setValue(input.target)}  />

            <input type="text" className="form-control" name="day" value={this.state.day}
                   onChange={(input)=> this.setValue(input.target)}  />

                <button className="btn btn-primary" onClick={this.submit}>Submit</button>

                <div>
                    {
                        this.state.occasions.is_holiday && <span className="badge bg-danger">تعطیل</span>
                    }
                   <ul>
                       {
                           this.state.occasions.events && this.state.occasions.events.map(e=> <li key={e.description}>{e.description}</li>)
                       }
                   </ul>
                </div>
            </>
        )
    }
}