export default function TwoStorys() {
  return (
    <section>
      <div className="row bg-light-green align-items-center p-4">
        <div className="col-lg-4 text-center">
          <img
            src="/assets/10_Years_Of_Experience.png"
            alt="10 Years Of Experience"
            className="img-fluid pb-5 ps-md-5"
          />
        </div>

        <div className="col-lg-4 d-flex flex-column justify-content-center align-items-center pb-5 pb-md-0">
          <div className="text-start" dir="ltr">
            <div className="d-flex align-items-start mb-4">
              <img
                src="/assets/Leaf.png"
                alt="Leaf"
                className="me-3"
                style={{ width: "30px" }}
              />
              <div>
                <h2 className="fw-bold mb-0">2K</h2>
                <p className="mb-0 fs-2">New products</p>
              </div>
            </div>

            <div className="d-flex align-items-start mb-4">
              <img
                src="/assets/Leaf.png"
                alt="Leaf"
                className="me-3"
                style={{ width: "30px" }}
              />
              <div>
                <h2 className="fw-bold mb-0">100K</h2>
                <p className="mb-0 fs-2">Students</p>
              </div>
            </div>

            <div className="d-flex align-items-start">
              <img
                src="/assets/Leaf.png"
                alt="Leaf"
                className="me-3"
                style={{ width: "30px" }}
              />
              <div>
                <h2 className="fw-bold mb-0">10K</h2>
                <p className="mb-0 fs-2">Students</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-lg-4 d-flex flex-column justify-content-center text-start"
          dir="ltr"
        >
          <h1 className="fw-light text-green fs-1">Impressive track record</h1>
          <p className="text-muted fs-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            exercitationem quis beatae temporibus nisi consequuntur nulla iste
            assumenda.
          </p>
        </div>

        <div className="container py-3 py-md-5">
          <h1 className="text-center my-5">Softina Success Stories</h1>

          <div className="row g-4 align-items-start">
            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-md-4 text-center">
                  <img
                    className="img-fluid rounded-circle custom-border mb-3 mb-md-0"
                    src="/assets/Success_Story_Icon_1.png"
                    alt="Story 1"
                  />
                </div>
                <div
                  className="col-md-8 d-flex flex-column"
                  style={{ minHeight: "200px" }}
                >
                  <h2 className="h4 fw-bold mb-lg-4 pt-4">
                    Success Store Title
                  </h2>
                  <p className="text-muted fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <a className="text-muted align-self-end mt-auto" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row align-items-center">
                <div className="col-md-4 text-center">
                  <img
                    className="img-fluid rounded-circle custom-border mb-3 mb-md-0"
                    src="/assets/Success_Story_Icon_2.jpeg"
                  />
                </div>
                <div
                  className="col-md-8 d-flex flex-column"
                  style={{ minHeight: "200px" }}
                >
                  <h2 className="h4 fw-bold mb-lg-4 pt-4">
                    Success Store Title
                  </h2>
                  <p className="text-muted fs-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis.
                  </p>
                  <a className="text-muted align-self-end mt-auto" href="#">
                    read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
