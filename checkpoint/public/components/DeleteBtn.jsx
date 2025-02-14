import React from 'react'
import { deleteMovie } from '../../api/api';
const DeleteBtn = ({id}) => {

    const deleteHandler = async()=>{
        await deleteMovie(id);
        window.location.reload()
    }

    return (
        <button onClick={deleteHandler}>🗑️</button>
    )
}

export default DeleteBtn