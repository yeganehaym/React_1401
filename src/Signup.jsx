import {Component} from "react";

export default class Login extends Component{

    render=()=>{
        return (<>
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>MobileNumber</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" />
            </div>
            <div className="form-group">
                <label>Date</label>
                <input type="text" className="form-control" />
            </div>
        </form>
        </>)
    }
}