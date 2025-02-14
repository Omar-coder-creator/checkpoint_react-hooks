import React from 'react'
import DeleteBtn from './DeleteBtn'

const Moviecard = ({movie}) => {
    const {title,description,posterurl,rating} = movie
    return (
        <div className='movie'>
            <span className='movie-title' > Title : {title} </span >
            <p> Description : {description} </p>
            <img src={posterurl} alt="Movie poster" />
            <span className='movie-rating'> Rating : {rating} </span>
            <DeleteBtn id={movie._id}/>
        </div>
  )
}

export default Moviecard