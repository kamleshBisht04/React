import { useState, useEffect } from "react";
import { KEY } from "./App";
import Loader from "./Loader";
import StarRating from "./StarRating";

export default function MovieDetails({ selectedId, onCloseMovie, onAddWatched, watched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, SetUserRating] = useState(0);

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  // console.log(isWatched);
  const watchedUserRating = watched.find((movie) => movie.imdbID === selectedId)?.userRating;

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    Plot: plot,
    Released: released,
    imdbRating,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  // console.log(title, year, released);
  function handleAdd() {
    const parsedRuntime = parseInt(runtime);
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      // runtime: Number(runtime.split(" ").at(0)),
      runtime: isNaN(parsedRuntime) ? 0 : parsedRuntime,
      userRating,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
          const data = await res.json();
          setMovie(data);
        } catch (err) {
          console.error(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
    // cleanup function
    return function () {
      document.title = "usePopcorn";
    };
  }, [title]);

  useEffect(
    function () {
      function callback(e) {
        console.log(e.code);
        if (e.code === "Escape" || e.code === "Backspace") {
          onCloseMovie();
          // console.log("close");
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [onCloseMovie]
  );

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${title} movie`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className={`rating ${isWatched ? "rated" : ""}`}>
              {!isWatched ? (
                <>
                  <StarRating maxRating={10} size={25} onSatRating={SetUserRating} />
                  {userRating > 0 && (
                    <button className="btn-add show" onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p> You already Rated this Movie with {watchedUserRating} ⭐</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Staring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}
