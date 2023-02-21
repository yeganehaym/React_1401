import react,{Component} from 'react'
import Post from './post'
export default class DisplayPost extends Component{

    p=new Post();

    render(){

        this.p.description='LG TV';
        this.p.like=30;
        this.p.save=true;
        this.p.comments=['Good Tv','Bad TV','this is awesome','az aval safhash kharab bood'];

        return(<>
        <p>Likes : {this.p.like}</p>
        <p>Comment Count : {this.p.comments.length}</p>
        <p>Save : {this.p.save ? "Save Shode":"Save Nashode"}</p>
        <p>{this.p.description}</p>
        {
          this.p.comments.map(c=><p>{c}</p>)
        }
        </>)
    }
}