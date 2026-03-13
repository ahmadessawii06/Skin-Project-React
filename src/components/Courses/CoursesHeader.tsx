export function CourseHeader() {
  return (
    <div className="bg-light">
      <div className="col-lg-12">
        <p
          id="Explore_Section"
          className="text-center fs-1 pt-lg-3 fw-light mb-3"
        >
          Explore our courses catalogue
        </p>
      </div>

      <div className="search-container pb-4 pt-4 bg-light text-center">
        <div
          className="position-relative mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <input
            type="search"
            className="form-control rounded-4 py-3 ps-4 shadow-lg border-0"
            placeholder="Search course catalog"
          />
          <button className="btn position-absolute end-0 top-50 translate-middle-y me-3 border-0 bg-transparent text-secondary">
            <i className="fa-solid fa-magnifying-glass fs-4"></i>
          </button>
        </div>
      </div>

      <hr className="text-secondary border-5 opacity-25" />

      <div className="row mx-auto d-flex justify-content-center text-center">
        <button
          className="col-lg-4 col-md-12 btn-green rounded-4 fs-4 mx-3 mb-3 mt-3"
          style={{ maxWidth: "250px" }}
        >
          Recent Courses
        </button>

        <button
          className="col-lg-4 col-md-12 btn-green-now rounded-4 fs-4 mx-3 mb-3 mt-3"
          style={{ maxWidth: "250px" }}
        >
          Featured category
        </button>

        <button
          className="col-lg-4 col-md-12 btn-green rounded-4 fs-4 mx-3 mb-3 mt-3"
          style={{ maxWidth: "250px" }}
        >
          Recent Courses
        </button>
      </div>

      <div className="container my-2">
        <div className="row align-items-center bg-light p-4 rounded-3 g-0">
          <div className="col-auto pe-4 me-4 border-end border-2 border-secondary border-opacity-25">
            <h4 className="fw-bold mb-0 text-dark">Recent Courses</h4>
          </div>

          <div className="col">
            <p className="text-muted mb-0 small lh-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              vehicula nunc in neque sollicitudin,
            </p>
            <p className="text-muted mb-0 small lh-sm">
              ac cursus tellus semper. Morbi posuere elit mollis erat gravida
              rhoncus.
            </p>
          </div>

          <div className="col-auto ps-4">
            <a href="#" className="btn-outline-olive rounded-pill px-4 py-2">
              View all courses
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader;
