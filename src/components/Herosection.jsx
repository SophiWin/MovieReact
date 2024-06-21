import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "../../src/index.css";
import React, { useEffect, useState } from "react";
import useFetch from "../hook/useFetch";
import videoIcon from "../assets/video.svg";
import { Link } from "react-router-dom";
export default function Herosection() {
  let [url] = useState(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US"
  );

  let { data: movies, loading, error } = useFetch(url);

  return (
    <div>
      {loading && <p>Loading ...</p>}
      {error && <p>Something went wrong !</p>}
      <Splide
        options={{ type: "loop", arrow: false, autoplay: true, interval: 2000 }}
      >
        {movies &&
          movies.map((movie) => {
            return (
              <SplideSlide key={movie.id}>
                <div className=" h-screen w-full relative">
                  <img
                    className="w-full h-full object-cover"
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  />
                  <div className="backDrop"></div>
                  <div className=" absolute z-20 text-white left-14 top-1/3 w-1/3">
                    <h1 className="text-5xl font-extrabold mb-3">
                      {movie.title}
                    </h1>
                    <p className="text-sm font-medium mb-3 ">
                      {movie.overview}
                    </p>

                    <button className="bg-red-600 text-white px-3 py-2 hover:scale-105 rounded-md shadow-xl font-medium text-lg mt-2 flex items-center justify-center gap-2">
                      <img className="w-6 h-6" src={videoIcon} />
                      Watch Now
                    </button>
                  </div>
                </div>
              </SplideSlide>
            );
          })}
      </Splide>
    </div>
  );
}
