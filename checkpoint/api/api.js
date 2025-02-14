import axios from 'axios'
const api_url =import.meta.env.VITE_API_URL

export const getMovies = async()=>{
    return await axios.get(api_url)
}

export const addMovie = async(movie)=>{
    return await axios.post(api_url,movie);
}

export const deleteMovie = async(id)=>{
    return await axios.delete(`${api_url}/${id}`)
}