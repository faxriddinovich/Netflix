import React from 'react'
import request from '../Request'
import Banner from './Banner'
import Films from './Films'
import Navbar from './Navbar'

function Main({user}) {

return (
    <div>
        <Navbar user={user}/>
        <Banner/>
        <Films 
          isLargeRow 
          title={"NETFLIX ORIGINALS"}
          movie_request={request.fetchNetflixOriginals}  
        />
        <Films 
          title={"Trending now"}
          movie_request={request.fetchTrending}  
        />
        <Films
                title={"Top Rated"} movie_request={request.fetchTopRated}
            />
            <Films
                title={"Action movies"} movie_request={request.fetchActionMovies}
            />
            <Films
                title={"Comedy movies"} movie_request={request.fetchComedyMovies}
            />
            <Films
                title={"Horror movies"} movie_request={request.fetchHorrorMovies}
            />
            <Films
                title={"Romance movies"} movie_request={request.fetchRomanceMovies}
            />
            <Films
                title={"Documentaries"} movie_request={request.fetchDocumentaries}
            />
    </div>
  )
}

export default Main