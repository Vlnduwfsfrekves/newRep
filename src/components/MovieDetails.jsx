import { useState,useEffect } from "react";
import { Link, Outlet,useParams,useNavigate } from "react-router-dom"
import { Img,Div,Div0,Button } from "./MovieDetails.styled";
const MovieDetails=()=>{
    const {id}=useParams()
    const nav=useNavigate()
    const [film,changeMovie]=useState(null);
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzQxM2E4ZDIyNjUwYjU1MWRkOWEyZTAxNDAyMjA1MCIsInN1YiI6IjY2NTI0MmYyZjlhZDA0OGYyZmVjZDVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOhaNSvhcUxwYogMi-yliW1Jl5-8J7kz01gNdvdQ-I0'
        }
    }
    useEffect(()=>{
        const fMovie=async()=>{
            fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`,options)
            .then(resp=>resp.json())
            .then(re=>changeMovie(re))
        }
        fMovie()
    },[id])
    const goBack=()=>{
        nav(-1)
    }
    if(!film){
        return <h1>Wait</h1>
    }
    return(
        <div>
            <Button onClick={goBack}>← Go back</Button>
            <Div>
                <Img src={"https://image.tmdb.org/t/p/original"+film.poster_path}/>
                <Div0>
                    <h1>{film.original_title} {'('+film.release_date.slice(0,4)+')'}</h1>
                    <p>User Score:{Math.round(film.vote_average*10)}</p>
                    <h2>Overview</h2>
                    <p>{film.overview}</p>
                    <h2>Genres</h2>
                    <p>{film.genres.map(genre=>Object.values(genre)[1]+' ')}</p>
                </Div0>
            </Div>
            <ul>
                <li><Link to='cast'>Cast</Link></li>
                <li><Link to='reviews'>Reviews</Link></li>
            </ul>
            <Outlet/>
        </div>
    )
}
export default MovieDetails