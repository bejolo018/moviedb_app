import React from 'react'
import { useParams } from 'react-router-dom'
import { useAxiosGet } from '../Hooks/HttpRequests'
import Loader from '../Components/Loader'


function Movie() {

    const { id } = useParams()

    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=50a3a9b623d9653744d4ff243885d5e1`
    
    let movie = useAxiosGet(url)

    let content = null

    if(movie.loading){
        content = <Loader />
    }

    if(movie.error){
        content = <h1>There was an error, please refresh or try again later</h1>
    }

    if(movie.data){
        return (
        content =
            <div>
                <h1 className="text-2xl font-bold mb-3">
                    {movie.data.title}                      
                </h1>
                <h1 className="text-2xl .font-semibold mb-3">
                {movie.data.tagline}
                </h1>
                <div>
                    <img
                        src={movie.data.images}
                        alt={movie.data.title}
                    />
                </div>
                <div className="max-w-md">
                    {movie.data.overview}
                </div>
                <div>
                    {movie.data.review}
                </div>
                
            </div>
        )
    }
    
    return (
        <div>
            {content}
        </div>
    )
}

export default Movie