import React from "react";
import useFetch from "../hook/useFetch";
import { Link } from "react-router-dom";

export default function Popular() {
  let {
    data: popularMovies,
    loading,
    error,
  } = useFetch(
    "https://api.themoviedb.org/3/movie/popular?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US"
  );

  return (
    <div>
      <h1 className="text-white font-extrabold text-xl mt-5 ml-3 ">
        Popular Movies
      </h1>
      <div className="grid grid-cols-2  md:grid-cols-10 gap-3 my-7 mx-auto p-4">
        {popularMovies &&
          popularMovies.map((popularMovie) => (
            <Link to={`/details/${popularMovie.id}`} key={popularMovie.id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${popularMovie.poster_path}`}
                className=" opacity-50 bg-black hover:opacity-100 hover:scale-105 flex"
              />
            </Link>
          ))}
      </div>
    </div>
  );
}
