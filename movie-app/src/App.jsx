import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import FetchMovie from "./assets/services/FetchMovie";
import Header from "./assets/components/Header";
import Movie from "./assets/components/Movie";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await FetchMovie();
        // console.log(response);
        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header title={"Cinema."} setMovies={setMovies} />
      <div className="container-lg px-5 px-sm-3 mb-5">
        <main>
          <div className="row justify-content-center justify-content-sm-start align-items-center mt-3">
            {movies.message ? (
              <div className="col-12 my-5 text-center">
                <h3>{movies.message}</h3>
              </div>
            ) : Array.isArray(movies) && movies.length === 0 ? (
              <div className="col-12 text-center">
                <h3>No Results Found</h3>
              </div>
            ) : (
              Array.isArray(movies) &&
              movies.map((movie) => (
                <Movie
                  key={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  year={movie.Year}
                />
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
