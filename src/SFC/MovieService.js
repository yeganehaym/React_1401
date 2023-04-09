import axios from "axios";

export const getmovies=async (page)=>{
    const output=await axios.get(`http://moviesapi.ir/api/v1/movies?page=${page}`);
    return output;
}