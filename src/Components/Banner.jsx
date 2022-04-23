import React, { useEffect, useState } from 'react'
import baseURL from './Base/axios'
import request from '../Request'
import axios from 'axios'

function Banner() {

  const [movie,setMovie]=useState([])

  useEffect(()=>{
    const fetchData=async ()=>{
      const resData=await baseURL.get(request.fetchNetflixOriginals)
      setMovie(
        resData.data.results[
          Math.floor(Math.random() * resData.data.results.length)
        ]
      )
    }
    fetchData()
  },[])
  return (
    <header 
      style={{
        backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.backdrop_path ? movie.backdrop_path : ''})`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
      }}
    >
      <div className='main'>
        <div className='bannerContents'>
          <h1 className='movieContent'>{movie.original_name}</h1>
          <div className='buttons'>
            <button className='btn'>Play</button>
            <button className='btn'>My List</button>
          </div>
          <p className='movieDesc'>{movie.overview}</p>
        </div>
      </div>
    </header>
  )
}

export default Banner