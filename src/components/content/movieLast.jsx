import latestTrailersMovies6 from '../../assets/images/movie6.jpg';

function MovieLast(){
    return(
        <div className="movie last">
            <div className="movie-image"> <span className="play"><span className="name">ICE AGE</span></span> <a href="#"><img src={latestTrailersMovies6} alt="" /></a> </div>
            <div className="rating">
            <p>RATING</p>
            <div className="stars">
                <div className="stars-in"> </div>
            </div>
            <span className="comments">12</span> </div>
      </div>
    )
}
export default MovieLast