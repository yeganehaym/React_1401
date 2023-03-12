import {Component} from "react";
import Joi from "joi";
import {JoiMessages} from "./JoiMessages";

export default class Signup extends Component{

    state={
        user:{
            fullname:'',
            mobile:'',
            email:'',
            date:'',
            newsletter:true
        },
        messages:[]

    }

    schema=Joi.object({
        fullname:Joi
            .string()
            .min(3)
            .max(15)
            .required()
            .label("نام و نام خانوادگی")
            .messages(JoiMessages),
        email:Joi
            .string()
            .regex(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
            .label("ایمیل")
            .required().messages(JoiMessages),
        mobile:Joi.string().pattern(/^09[0-9]{9}$/).required()
            .label("شماره همراه")
            .messages(JoiMessages),

    })

    setName=(target)=>{


        const {name:x,value}=target;

        const user={...this.state.user};
        user[x]=value;
        this.setState({user});
    }

    setCheck=(target)=>{
        const name=target.name;
        const user={...this.state.user};

        user[name]=!user[name];
        this.setState({user})
    }

    submit=(a)=>{
        a.preventDefault();

        const errors=this.schema.validate(this.state.user,{
            abortEarly:false,
            allowUnknown:true
        });
        console.log(errors);



        if(errors.error && errors.error.details && errors.error.details.length>0)
        {
            const messages=errors.error.details.map(e=>e.message);
            this.setState({messages})
        }
        else{
            this.setState({messages:[]})
        }

    }
    render=()=>{
        return (<>
        <form onSubmit={a=> this.submit(a)}>
            {
                this.state.messages.length>0 &&
                <p className={"alert alert-danger"}>
                    {
                        <ul>
                            {this.state.messages.map(m=><li>{m}</li>)}
                        </ul>
                    }
                </p>
            }
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