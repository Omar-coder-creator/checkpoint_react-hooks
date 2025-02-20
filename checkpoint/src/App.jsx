import './App.css'
import Filter from '../public/components/Filter'
import Movielist from '../public/components/Movielist'
import { createContext, useState } from 'react'
import Addmovie from '../public/components/Addmovie'
import { Route, Routes } from 'react-router'
import MovieDetails from '../public/components/MovieDetails'
export const filterContext = createContext()

function App() {
  const [filter, setFilter] = useState([])

  return (
    <div id='app'>
      <filterContext.Provider value={{ filter, setFilter }}>
        <Routes>
          <Route path='/' element={<div id='main-page'><Filter /><Movielist filter={filter}/><Addmovie/></div>}/>
          <Route path='/moviedetails' element={<MovieDetails/>}/>
        </Routes>
      </filterContext.Provider>
    </div>
  )
}

export default App
