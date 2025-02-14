import React , {useEffect,useState} from 'react'
import Moviecard from './Moviecard'
import { getMovies } from '../../api/api'

const Movielist = ({filter}) => {

  

  const [movies,setMovies] = useState([])
  const [filtredMovies,setFiltredMovies] = useState([])
  

  useEffect(()=>{
    getMovies().then(res => {setMovies(res.data) ; setFiltredMovies(res.data)}).catch(err => console.error(err))
  },[])

  useEffect(()=>{
    if(!filter.title && ! filter.rating) return setFiltredMovies(movies)
    if(!filter.title) return setFiltredMovies(movies.filter(movie => movie.rating == filter.rating))
    if(!filter.rating) return setFiltredMovies(movies.filter(movie => movie.title == filter.title))
    setFiltredMovies(movies.filter(movie => movie.title == filter.title || movie.rating == filter.rating))
  },[filter])

  

  return (
    <div id='movie-list'>
      {filtredMovies.map( (elem,index) => <Moviecard movie={elem} key={index}/>)}
    </div>
  )
}

export default Movielist