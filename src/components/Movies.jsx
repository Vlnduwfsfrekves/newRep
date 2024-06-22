import {useEffect, useRef, useState} from "react"
import {Link,useSearchParams} from "react-router-dom"
import {Input} from "./Movies.styled"
const Movies=()=>{
    const [queryPar,changeQueryPar]=useSearchParams()
    const query=queryPar.get("query")
    const input=useRef()
    const options={
        method:'GET',
        headers:{
            accept:'application/json',
            Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzQxM2E4ZDIyNjUwYjU1MWRkOWEyZTAxNDAyMjA1MCIsInN1YiI6IjY2NTI0MmYyZjlhZDA0OGYyZmVjZDVhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IOhaNSvhcUxwYogMi-yliW1Jl5-8J7kz01gNdvdQ-I0'
        }
    }
    let [li,changeLi]=useState([])
    const click=()=>{
        changeQueryPar({query:input.current.value})
        input.current.value=''
    }
    useEffect(()=>{
        if(!query){
            return
        }
        const find=async()=>{
            await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&language=en-US&page=1`,options)
            .then(resp=>resp.json())
            .then(re=>changeLi(re.results))
        }
        find()
    },[query])
    return(
        <div>
            <Input type="text" ref={input}/>
            <button onClick={click}>Search</button>
            <ul>
                {li.map(el=>
                    <li key={el.id}>
                        <Link to={`${el.id}`}>{el.original_title}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}
export default Movies