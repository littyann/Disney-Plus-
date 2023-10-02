import React, {useEffect,useState} from 'react';
import './Banner.css';
import instance from '../instance';

function Banner({fetchUrl}) {
    const [movie,setmovie] = useState({})
    const base_url = "https://image.tmdb.org/t/p/original/";

    
    const fetchData = async ()=>{
        const {data}= await instance.get(fetchUrl)
        // console.log(data.items[Math.floor(Math.random()*data.items.length)]);
        setmovie(data.items[Math.floor(Math.random()*data.items.length)])

    }
    console.log(movie);

    useEffect(()=>{
        fetchData()
    },[])

  return (
    <div style={{
        height:"600px",
        backgroundImage:`url(${base_url}/${movie?.backdrop_path})`,
        backgroundSize:"cover",
        backgroundAttachment:"fixed"
    }}>
        <div className="banner-content">
            <h1>{movie?.title}</h1>
            <h2>{movie?.overview?.slice(0,200)}...</h2>
        </div>

    </div>
  )
}

export default Banner