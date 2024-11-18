import PropTypes from "prop-types";

export default function Movie({ title, year, poster }) {
  return (
    <>
      <div className="col-12 col-sm-6 col-md-6 col-xl-4 col-xxl-3 pt-3">
        <div className="card movie-card" style={{ width: "18rem" }}>
          <div className="d-flex justify-content-center">
            <img
              src={poster}
              className="card-img-top img-fluid"
              alt={title}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h4 className="card-title">{title}</h4>
              <p className="card-text text-muted">{year}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};
