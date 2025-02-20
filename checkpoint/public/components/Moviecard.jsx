import React from 'react'
import DeleteBtn from './DeleteBtn'
import { useNavigate } from 'react-router-dom'
const Moviecard = ({ movie }) => {
    const navigate = useNavigate()
    const { title, posterurl, rating } = movie
    return (
        <div className='movie' >
            <span className='movie-title' > Title : {title} </span >
            <img src={posterurl} alt="Movie poster" onClick={() => navigate(`/moviedetails?title=${movie.title}&description=${movie.description}&trailerLink=${movie.trailerLink}`)} />
            <span className='movie-rating'> Rating : {rating} </span>
            <DeleteBtn id={movie._id} />
        </div>
    )
}

export default Moviecard