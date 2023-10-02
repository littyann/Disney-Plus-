import React, { useEffect, useState } from 'react'
import './Row.css';
import instance from '../instance';


function Row({title,fetchUrl}) {
    const [allMovies,setAllMovies] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/";

    
    const fetchData = async ()=>{
        const {data}= await instance.get(fetchUrl)
        // console.log(data.items);
        setAllMovies(data.items)

    }
    // console.log(allMovies);

    useEffect(()=>{
        fetchData()
    },[])
  return (
    <div className='row'>
        <h1>{title}</h1>
        <div className="movies-row">
            {
                allMovies?.map(item=>(
                    <img className='movie' src={`${base_url}/${item?.backdrop_path}`} alt="no image" />
                ))
            }
        </div>
    </div>
  )
}

export default Row