import {Component} from "react";
import {CalendarService} from "./CalendarService";
import './Movies.css'
export default  class Movies extends Component{

    state={
        movies:[]
    }

    filters=[];//['The Godfather: Part II','The Good, the Bad and the Ugly','The Shawshank Redemption'];

    calService=new CalendarService();

    async componentDidMount() {
        const output=await this.calService.getmovies(2);
        const newData=output.data.data.filter(z=>!this.filters.includes(z.title))
        this.setState({movies:newData});
    }

    render() {
        return (<>
            <ul>
                {
                    this.state.movies.map(m=><li key={m.id} ><img style={{width:'64px'}} src={m.poster} />{m.title} {m.year} ({m.imdb_rating})</li>)
                }
            </ul>
            </>)
    }
}