export default function CoursesCards() {
  return (
    <div className="container py-3">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div className="col">
          <div className="card h-100 border-0 shadow-sm custom-card">
            <div className="position-relative p-2">
              <img
                src="/assets/Card_1.png"
                className="card-img-top rounded-4"
                alt="Course"
              />
              <span className="badge bg-warning text-dark position-absolute bottom-0 start-0 ms-3 mb-3 rounded-pill px-3">
                Free Subscription
              </span>
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/Instructor.png"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                  alt="Instructor"
                />
                <div>
                  <small className="text-muted d-block lh-1">Instructor</small>
                  <h6 className="mb-0 fw-bold small">Dr. Harald Helfeger</h6>
                </div>
              </div>
              <h5 className="card-title fw-bold fs-6">
                Effective use and understanding of clinical...
              </h5>
              <p className="card-text text-muted small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dapibus iaculis sagittis
              </p>
              <div className="d-grid mt-5">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-pill custom-btn py-2"
                >
                  Course details
                  <i className="fa-solid fa-circle-chevron-right arrow-course-details ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 shadow-sm custom-card">
            <div className="position-relative p-2">
              <img
                src="/assets/Card_2.png"
                className="card-img-top rounded-4"
                alt="Course"
              />
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/Instructor.png"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                  alt="Instructor"
                />
                <div>
                  <small className="text-muted d-block lh-1">Instructor</small>
                  <h6 className="mb-0 fw-bold small">Dr. Harald Helfeger</h6>
                </div>
              </div>
              <h5 className="card-title fw-bold fs-6">Effective use and...</h5>
              <p className="card-text text-muted small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dapibus iaculis sagittis.
              </p>
              <div className="text-end mb-2">
                <span className="text-muted text-decoration-line-through me-1">
                  399$
                </span>
                <span className="h5 fw-bold">299$</span>
              </div>
              <div className="d-grid mt-3">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-pill custom-btn py-2"
                >
                  Course details
                  <i className="fa-solid fa-circle-chevron-right arrow-course-details ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 shadow-sm custom-card">
            <div className="position-relative p-2">
              <img
                src="/assets/Card_3.png"
                className="card-img-top rounded-4"
                alt="Course"
              />
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/Instructor.png"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                  alt="Instructor"
                />
                <div>
                  <small className="text-muted d-block lh-1">Instructor</small>
                  <h6 className="mb-0 fw-bold small">Dr. Harald Helfeger</h6>
                </div>
              </div>
              <h5 className="card-title fw-bold fs-6">Effective use and...</h5>
              <p className="card-text text-muted small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dapibus iaculis sagittis.
              </p>
              <div className="text-end mb-2">
                <span className="h5 fw-bold">149$</span>
              </div>
              <div className="d-grid mt-3">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-pill custom-btn py-2"
                >
                  Course details
                  <i className="fa-solid fa-circle-chevron-right arrow-course-details ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="card h-100 border-0 shadow-sm custom-card">
            <div className="position-relative p-2">
              <img
                src="/assets/Card_4.png"
                className="card-img-top rounded-4"
                alt="Course"
              />
            </div>
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <img
                  src="/assets/Instructor.png"
                  className="rounded-circle me-2"
                  width="40"
                  height="40"
                  alt="Instructor"
                />
                <div>
                  <small className="text-muted d-block lh-1">Instructor</small>
                  <h6 className="mb-0 fw-bold small">Dr. Harald Helfeger</h6>
                </div>
              </div>
              <h5 className="card-title fw-bold fs-6">Effective use and...</h5>
              <p className="card-text text-muted small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                dapibus iaculis sagittis.
              </p>
              <div className="text-end mb-2">
                <span className="h5 fw-bold">149$</span>
              </div>
              <div className="d-grid mt-3">
                <a
                  href="#"
                  className="btn btn-outline-secondary rounded-pill custom-btn py-2"
                >
                  Course details
                  <i className="fa-solid fa-circle-chevron-right arrow-course-details ms-2"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



