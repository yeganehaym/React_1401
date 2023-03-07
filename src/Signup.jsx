import {Component} from "react";
import Joi from "joi";

export default class Signup extends Component{

    state={
        user:{
            fullname:'',
            mobile:'',
            email:'',
            date:'',
            newsletter:true
        },
        error:''

    }

    schema=Joi.object({
        fullname:Joi
            .string()
            .min(3)
            .max(15)
            .required(),
        email:Joi
            .string()
            .required(),
        mobile:Joi.string().pattern(/^09[0-9]+/).length(11),

    })

    setName=(target)=>{

        //const name=target.name;
       // const value=target.value;

        const {name:x,value}=target;


        const user={...this.state.user};
        user[x]=value;
        this.setState({user});

        const errors=this.schema.validate(this.state.user,{abortEarly:false});
        console.log(errors);

    }

    setCheck=(target)=>{
        const name=target.name;
        const user={...this.state.user};

        user[name]=!user[name];
        this.setState({user})
    }
    render=()=>{
        return (<>
        <form>
            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" name="fullname" value={this.state.user.fullname} onInput={a=>this.setName(a.target)} />
            </div>
            <div className="form-group">
                <label>MobileNumber</label>
                <input type="text" className="form-control" name="mobile" value={this.state.user.mobile} onInput={a=>this.setName(a.target)} />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" className="form-control" name="email" value={this.state.user.email} onInput={a=>this.setName(a.target)} />
                <span>{this.state.error}</span>
            </div>
            <div className="form-group">
                <label>Date</label>
                <input type="text" className="form-control" name="date" value={this.state.user.date} onInput={a=>this.setName(a.target)} />
            </div>
            <div className="form-group">
                <input type="checkbox" name="newsletter" checked={this.state.user.newsletter?"checked":null} onChange={a=>this.setCheck(a.target)}  />
                <label>NewsLetter</label>

            </div>

            <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
        </form>
        </>)
    }
}