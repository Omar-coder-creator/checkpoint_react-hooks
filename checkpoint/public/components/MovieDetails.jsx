import React from 'react'
import { useNavigate } from 'react-router';
const MovieDetails = () => {
  const navigate = useNavigate()

  const urlParams = new URLSearchParams(window.location.search);

  const title = urlParams.get("title");
  const description = urlParams.get("description");
  const trailer = urlParams.get("trailerLink");
  
  return (
    <div className="movie-container">
      <h1 className="movie-title-detail">{title}</h1>
      <p className="movie-description">
        {description}
      </p>
      <div className="trailer-container">
        <iframe
          width="560"
          height="315"
          src={trailer}
          allowFullScreen>
        </iframe>
      <button onClick={()=>navigate('/')} className='return-button'>⬅ Back To Home Page</button>
      </div>
    </div>


  )
}

export default MovieDetails