import {useEffect,useState} from "react"
import {Link} from "react-router-dom"
const Home=()=>{
    const options={
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzQxM2E4ZDIyNjUwYjU1MWRkOWEyZTAxNDAyMjA1MCIsInN1YiI6IjY2NTI0MmYyZjlhZDA0OGYyZmVjZDVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOhaNSvhcUxwYogMi-yliW1Jl5-8J7kz01gNdvdQ-I0'
        }
    }
    let [tre,changeTre]=useState([])
    useEffect(()=>{
        const trend=async()=>{
            await fetch(`https://api.themoviedb.org/3/discover/movie?language=en-US&page=1&sort_by=popularity.desc`,options)
            .then(resp=>resp.json())
            .then(re=>changeTre(re.results))
        }
        trend()
    },[])
    return(
        <div>
            <h1>Trending today</h1>
            <ul>
                {tre.map(el=>
                <li key={el.id}>
                    <Link to={`/movies/${el.id}`}>{el.original_title}</Link>
                </li>
                )}
            </ul>
        </div>
    )
}
export default Home