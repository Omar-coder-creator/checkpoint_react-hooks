import React, { useContext, useRef } from 'react'
import { filterContext } from '../../src/App'

const Filter = () => {
    const {setFilter} = useContext(filterContext)
    let title = useRef('')
    let rating = useRef(0)
    const filterHandler = (e)=>{
        e.preventDefault();
        const filterObject = {
            title : title.current.value,
            rating : rating.current.value
        }
        setFilter(filterObject)
    }
    return (
        <form action="" id='filter-section'>
            <h1 id='filter-title'>Filter movies</h1>
            <div id='filter-config'>
                <input type="text" name="" id="" placeholder='Movie title ? ' ref={title}/>
                <select name="" id="" ref={rating}>
                    <option value="">Choose filter</option>
                    {[1,2,3,4,5].map((elem,index) => <option value={elem} key={index}>{elem}</option>)}
                </select>
                <button onClick={filterHandler}>Apply</button>
                <input type="reset" value="Reset" />
            </div>
        </form>
    )
}

export default Filter