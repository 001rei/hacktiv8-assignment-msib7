import { useState } from "react";
import FetchMovie from "../services/FetchMovie";
import PropTypes from "prop-types";

export default function Search({ setMovies }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (query.trim() !== "") {
      setLoading(true);

      try {
        const response = await FetchMovie(query);
        // console.log(response);
        setMovies(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
  };

  return (
    <>
      {loading && (
        <div className="pe-3 pt-1">
          <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
      <div className="pb-4 pt-2">
        <form className="d-flex" onSubmit={handleSubmit} role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Find movies by title"
            aria-label="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn btn-outline-danger" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
}

Search.propTypes = {
  setMovies: PropTypes.func.isRequired,
};
