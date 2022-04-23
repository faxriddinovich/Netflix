import React, { useEffect, useState } from 'react'
import Tooltip  from '@mui/material/Tooltip'
import request from '../Request'
import baseURL from './Base/axios'
import YouTube from 'react-youtube'

function Films({isLargeRow,title,movie_request}) {
  const [movies,setMovies]=useState([])
  const [trailerUrl,setTrailerUrl]=useState("")

  const fetchMovieTrailer=async (movie) => {
    await baseURL.get("/movie/" + movie?.id.toString() + request.trailerQuery)
    .then((responseData) => {
        setTrailerUrl(responseData.data.results[0]?.key)
    })
    .catch((error) => console.error(error))
  }
  
  function handleClick(movie){
      if(trailerUrl){
          setTrailerUrl("")
      }
      else {
          fetchMovieTrailer(movie)
      }
  }

  const opts={
      playerVars:{
          autoplay:1
      },
  }

  useEffect(()=>{
    const fetchData= async () => {
        const resData=await baseURL.get(movie_request)
        setMovies(
            resData.data.results.slice(0,6)
        )
    }
    fetchData()
  },[])
  return (
    <div className='fieldsCategory'>
        <h3>{title}</h3>
        <div className='films'>
            {movies ? movies.map((item) => (
                <Tooltip title={item.original_title || item.original_name} key={item.id}>
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${item.backdrop_path ? item.backdrop_path : item.poster_path}`} 
                        alt={item.original_title}
                        onClick={() => handleClick(item)}
                        loading={'lazy'}    
                        className={`film ${ isLargeRow && "filmsPosterLarge"}`}
                    />
                </Tooltip>
            )) : ''}
        </div>
        {trailerUrl && <YouTube className='ytPlayer' videoId={trailerUrl} options={opts} />}
    </div>
  )
}

export default Films