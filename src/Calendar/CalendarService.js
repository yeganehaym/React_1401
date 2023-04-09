import axios from "axios";
export class CalendarService{

    getOccasions=async (year,month,day)=>{
        const output=await axios.get(`https://persiancalapi.ir/jalali/${year}/${month}/${day}`);
        return output;
    }

    getmovies=async (page)=>{
        const output=await axios.get(`http://moviesapi.ir/api/v1/movies?page=${page}`);
        return output;
    }
}