import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
  const { id } = useParams();
  let [movie, setMovie] = useState({});
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        return setMovie(data);
      });
  }, []);
  return (
    <div className="mx-auto w-2/3 py-10 flex">
      {movie && (
        <div className="flex items-center">
          <div className="md:flex md:justify-center md:items-center gap-5 ">
            <img
              className=" w-[300px] object-cover"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />

            <div className="text-white">
              <h1 className="text-3xl font-bold border-b-2 border-red-500 py-3 mb-3">
                {movie.original_title}
              </h1>
              <p className="text-gray-400 font-serif ">{movie.overview}</p>
              <p className="text-red-300 font-serif mb-3 ">
                Duration - {movie.runtime} minutes
              </p>
              {movie.genres &&
                movie.genres.map((g) => (
                  <span
                    key={g.id}
                    className="font-serif text-sm border border-red-700 px-2 py-1 mr-3 italic "
                  >
                    {g.name}
                  </span>
                ))}
              <div className="flex gap-3">
                <Link to={movie.homepage}>
                  <button className="bg-red-600  text-white px-3 py-2 hover:scale-105 rounded-md shadow-xl font-medium text-lg my-8 ">
                    Watch Now
                  </button>
                </Link>
                <Link to="/">
                  <button className="bg-gray-600  text-white px-3 py-2 hover:bg-gray-500 rounded-md shadow-xl font-medium text-lg my-8 ">
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
