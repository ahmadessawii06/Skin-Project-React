export default function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="row gx-5">

          <div className="col-md-6">
            <h1 className="contact-title">Get in touch</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>

            <div className="info-label">Address</div>
            <p>
              Some Straße <br />
              Munchen, 11230 <br />
              Germany
            </p>

            <div className="info-label">Phone</div>
            <p>
              800-123-4567, <br />
              Fax: 718-724-3312
            </p>
          </div>

          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your email address"
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  placeholder="Comments"
                ></textarea>
              </div>

              <div className="text-start">
                <button type="submit" className="btn-send">
                  Send
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}