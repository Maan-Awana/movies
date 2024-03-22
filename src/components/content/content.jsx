import { useEffect, useState } from 'react';
import Box from './box';
function Content(){
  const apiKey = 'f03f72faecdb50ab102a56469a49389a';

  const [allMovies, setAllMovies] = useState([]);
  const [categories, setCategories] = useState([]);

  const handleApi = async () => {
    const categories = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`);
    const ctg = await categories.json()
    const genres = ctg.genres;
    setCategories(genres);
    setAllMovies([]);
    genres.map(async genre => {
      const getMovieByCtg = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${genre.id}`)
      const movies = await getMovieByCtg.json()
      const parsed = movies.results;
      setAllMovies((prev) => [...prev, ...parsed])
    })

    
  };

  useEffect(() => {
    handleApi();
  },[]);

  useEffect(() => {
    console.log(categories)
  },[categories])

    return(
      <div id="content">

        {
          allMovies.length  >0 &&
          categories.map((ctg) => {
            const categoryWiseMovies = allMovies.filter(mov => mov.genre_ids.filter(id =>id === ctg.id).length > 0);
            console.log("category wise", categoryWiseMovies)
            return  <Box title={ctg.name} category="latestTrailers" 
            filtterMovies={categoryWiseMovies }
            />
          })
        }
        {/* <Box title={'TOP RATED'} category="topRated"/>
        <Box title={'MOST COMMENTED'} category="mostCommented"/> */}
      </div>
    )}
export default Content