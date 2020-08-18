import React from 'react'
import { Link } from 'react-router-dom'

function MovieCard(props) {
    return (
        <div className="border mb-4 rounded overflow-hidden">
            {/* <Link to ={`/movies/${props.movie.id}`}>
            <div
                style={{
                    'backgroundImage': `url('${props.movie.images}')`                    
                }}
                className="w-full h-64 bg-blue bg-cover"
            >
            </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3">
                <Link to ={`/movies/${props.movie.id}`}>
                    {props.movie.name}
                </Link>
                </h3>
            <div className="font-bold mb-3">
                $ {props.movie.price}
            </div>
            <div>
            <Link to ={`/movies/${props.movie.id}`}
                  className="bg-blue-500 text-white p-2 flex justify-center"
            >
                View
            </Link>
            </div>
            </div> */}

            moviecard render 
            {/* <h1>{props.movie.title}</h1> */}
        </div>
    )
}


export default MovieCard 