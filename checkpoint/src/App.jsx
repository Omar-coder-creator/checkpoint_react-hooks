import './App.css'
import Filter from '../public/components/Filter'
import Movielist from '../public/components/Movielist'
import { createContext, useState } from 'react'
import Addmovie from '../public/components/Addmovie'

export const filterContext = createContext()

function App() {
  const [filter, setFilter] = useState([])

  return (
    <div id='app'>
      <filterContext.Provider value = {{filter,setFilter}}>
      <Filter />
      <h1>Movies</h1>
      <Movielist filter={filter}/>
      <Addmovie/>
      </filterContext.Provider>
    </div>
  )
}

export default App
