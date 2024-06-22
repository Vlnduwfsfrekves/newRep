import {Route,Routes} from "react-router-dom"
import {Layout} from "./Layout"
import {Suspense,lazy} from "react"
const Home=lazy(()=>import('./Home'))
const Movies=lazy(()=>import('./Movies'))
const MovieDetails=lazy(()=>import('./MovieDetails'))
const Cast=lazy(()=>import('./Cast'))
const Reviews=lazy(()=>import('./Reviews'))
export const App=()=>{
    return(
        <div>
            <Suspense fallback={<h1>Wait</h1>}>
                <Routes>
                    <Route path="/" element={<Layout></Layout>}>
                        <Route index element={<Home></Home>}></Route>
                        <Route path="movies" element={<Movies></Movies>}/>
                        <Route path="movies/:id" element={<MovieDetails></MovieDetails>}>
                            <Route path="cast" element={<Cast></Cast>}/>
                            <Route path="reviews" element={<Reviews></Reviews>}/>
                        </Route>
                    </Route>
                </Routes>
            </Suspense>
        </div>
    )
}