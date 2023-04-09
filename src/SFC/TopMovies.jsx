import {useContext, useEffect, useState} from "react";
import {getmovies} from "./MovieService";
export const TopMovies=()=>{

    const [counter,setCounter]=useState(0);
    const [movies,setMovies]=useState([]);
    const [page,setPage]=useState(1);

    useEffect(()=>{

        async function fetchData()
        {
            const {data:topMovies}=await getmovies(page);
            console.log(topMovies);
            const newMovies=[...movies,...topMovies.data];
            console.log(newMovies);

            setMovies(newMovies);
        }

        fetchData();

    },[page])

    const  next=()=>{
        setPage(page+1);
    }
    const  prev=()=>{
        if(page==1)
            return;

        setPage(page-1);
    }


    return (<>
    <h1>Movies</h1>
        <span>{counter}</span>
        <button onClick={()=>setCounter(counter+3)}>Inc</button>
        <hr/>

        {
            movies.map(m=><li key={m.id} ><img style={{width:'64px'}} src={m.poster} />{m.title} {m.year} ({m.imdb_rating})</li>)
        }

        <div>
        {/*    <button className="btn btn-primary" onClick={()=>prev()} >Prev</button>
            <button className="btn btn-primary" onClick={()=> next()}>Next</button>*/}
            <button className={"btn btn-primary"} onClick={()=>next()}>Load More ...</button>
        </div>
    </>)
}