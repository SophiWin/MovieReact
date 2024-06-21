import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Search() {
  const { title } = useParams();
  const [searchedMovies, setSearchedMovies] = useState([]);
  useEffect(() => {
    getSearchMovie();
  }, [title]);

  const getSearchMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US&query=${title}&page=1&include_adult=false`
    );
    const data = await res.json();
    setSearchedMovies(data.results);
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-white font-extrabold text-xl mt-5 ml-3 ">
        Search results for "{title}"
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-10 gap-3 my-7 mx-auto p-4">
        {searchedMovies &&
          searchedMovies.map((m) => (
            <Link to={`/details/${m.id}`} key={m.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                className=" opacity-50 bg-black hover:opacity-100 hover:scale-105 flex"
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
