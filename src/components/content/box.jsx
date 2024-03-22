import Movie from './movie';
import MovieLast from './movieLast';
import React, { useState, useEffect } from 'react';
// import { movies } from './properties';
    function Box({title,filtterMovies}){

    return( 
        <div className="box">
        <div className="head">
            <h2>{title}</h2>
            <p className="text-right"><a href="#">See all</a></p>
        </div>
        {   
            filtterMovies.map((m) => (
                <Movie  title={m.original_title} movieImage={m.backdrop_path} commentCount={m.vote_count}/>
            ))
        }
        <MovieLast/>
        <div className="cl">&nbsp;</div>
    </div>
    
    )
}

export default Box