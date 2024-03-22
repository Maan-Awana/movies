function Movie({title,movieImage,commentCount}){
    return(
        <div className="movie">
            <div className="movie-image"> <span className="play"><span className="name">{title}</span></span> <a href="#"><img style={{
                objectFit: "cover"
            }} src={`https://image.tmdb.org/t/p/w500/${movieImage}`} alt="" /></a> </div>
            <div className="rating">
                <p>RATING</p>
                <div className="stars">
                    <div className="stars-in"> </div>
                </div>
                <span className="comments">{commentCount}</span> 
            </div>
        </div>
    )
}
export default Movie;