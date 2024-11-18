import PropTypes from "prop-types";
import Search from "./Search";

export default function Header({ title, setMovies }) {
  return (
    <>
      <header>
        <nav className="bg-dark px-5 pt-3">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6 col-md-6">
              <div className="d-flex justify-content-start">
                <div>
                  <h1 className="title">{title}</h1>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-6">
              <div className="d-flex justify-content-start justify-content-md-end">
                <Search setMovies={setMovies} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  setMovies: PropTypes.func.isRequired,
};
