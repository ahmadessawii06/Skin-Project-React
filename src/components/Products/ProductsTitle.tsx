export default function ProductsTitle() {
  return (
    <section className="position-relative">
      <img
        src="/assets/Soap_Flavours.jpg"
        alt="Soap Flavors"
        className="w-100 d-block"
        style={{
          height: "700px",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <div className="position-absolute top-0 start-0 w-100 pt-5">
        <div className="container pt-3">
          <div className="row">

            <div className="col-12 col-lg-4 mb-4 mb-lg-0">
              <h2
                id="Content_Section"
                className="fw-bold mb-3"
                style={{ fontSize: "2.4rem", lineHeight: "1.2" }}
              >
                Beauty products
                <br />
                of your own!
              </h2>

              <p
                className="text-secondary mt-3"
                style={{ maxWidth: "350px", fontSize: "0.95rem" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: "#8CB53E", fontSize: "1.1rem" }}
                  ></i>
                  Pellentesque suscipit justo quis
                </li>
                <li className="mb-3">
                  <i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: "#8CB53E", fontSize: "1.1rem" }}
                  ></i>
                  Curabitur ac odio lacus
                </li>
                <li>
                  <i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: "#8CB53E", fontSize: "1.1rem" }}
                  ></i>
                  Nulla ligula metus, maximus
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 mb-3">
              <ul className="list-unstyled mb-0">
                <li className="mb-3">
                  <i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: "#8CB53E", fontSize: "1.1rem" }}
                  ></i>
                  incididunt ut labore et
                </li>
                <li className="mb-3">
                  <i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: "#8CB53E", fontSize: "1.1rem" }}
                  ></i>
                  Nulla ligula metus, maximus
                </li>
                <li>
                  <i
                    className="fa-regular fa-circle-check me-2"
                    style={{ color: "#8CB53E", fontSize: "1.1rem" }}
                  ></i>
                  Nulla ligula metus, maximus
                </li>
              </ul>

              <div className="d-flex justify-content-end mt-4">
                <a href="#" className="btn btn-dark rounded-pill px-4 py-2">
                  Read more
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}