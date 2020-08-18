import React from 'react'
import Loader from '../Components/Loader'
import MovieCard from '../Components/MovieCard'
import { useAxiosGet } from '../Hooks/HttpRequests'

function Home() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=50a3a9b623d9653744d4ff243885d5e1&language=en-US&page=1`

    let movies = useAxiosGet(url.results)

    

    let content = null

    if(movies.loading){
        content = <Loader />
    }

    if(movies.error){
        content = <h1>There was an error please refresh or try again later</h1>
    }

    if(movies.data){
        return (
            content =
            movies.data.map((movie, key) => 
                <div key={movie.id}>
                    <MovieCard
                        movie={movie}
                    />
                </div>
            )
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl">
                Most Popular
            </h1>
            {content}
        </div>
    )
}

export default Home 