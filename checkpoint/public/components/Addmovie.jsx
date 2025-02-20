import React , {useRef} from 'react'
import { addMovie } from '../../api/api'
const Addmovie = () => {
    let title = useRef('')
    let description = useRef('')
    let posterurl = useRef('')
    let rating = useRef(0)
    let trailerLink = useRef('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        const movie = {
            title : title.current.value ,
            description : description.current.value,
            posterurl : posterurl.current.value,
            rating : rating.current.value,
            trailerLink :trailerLink.current.value
        }
        await addMovie(movie)
        window.location.reload()
    }
    return (
        <div>
            <form action="" id='add-movie'>
                <h2 id='add-title'>Add movie</h2>
                <label >Title:</label>
                <input type="text" name="title" id="" ref={title}/>
                <label htmlFor="">Description</label>
                <textarea name="description" id="" ref={description}></textarea>
                <label htmlFor="" ref={posterurl}>PosterUrl:</label>
                <input type="url" name="posterurl" id="" ref={posterurl} />
                <label htmlFor="">Trailer Url</label>
                <input type="text" ref={trailerLink} />
                <select name="" id="" ref={rating}>
                    <option value="">Rate</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input type="submit" value="Submit" onClick={handleSubmit}/><input type="reset" value="Reset" onClick={()=> window.location.reload()} />
            </form>
        </div>
    )
}

export default Addmovie