export default function Footer() {
  return (
    <footer className="custom-footer">
      <div className="container">
        <div className="row">

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-heading">Société</h5>
            <ul className="footer-links">
              <li><a href="#">Contact</a></li>
              <li><a href="#">Presse</a></li>
              <li><a href="#">Recrutements</a></li>
              <li><a href="#">English</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-heading">Solutions</h5>
            <ul className="footer-links">
              <li><a href="#">Plateformes d'apprentissage</a></li>
              <li><a href="#">Fonctionnalités</a></li>
              <li><a href="#">Mask</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-6 mb-4">
            <h5 className="footer-heading">Offres</h5>
            <ul className="footer-links">
              <li><a href="#">Académiques</a></li>
              <li><a href="#">Organismes de formations</a></li>
              <li><a href="#">Entreprise</a></li>
            </ul>
          </div>

          <div className="col-md-3 col-sm-12 mb-4">
            <h5 className="footer-heading text-center text-md-start">
              Social Media
            </h5>
            <ul className="list-unstyled d-flex flex-row justify-content-center justify-content-md-start gap-4 p-0">
              <li>
                <a
                  className="text-white fs-3"
                  href="https://x.com/home"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-white fs-3"
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-white fs-3"
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-youtube"></i>
                </a>
              </li>
              <li>
                <a
                  className="text-white fs-3"
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <div className="row footer-bottom align-items-center px-md-5">
        <div className="col-md-4 text-start">
          Copyright © 2026
        </div>

        <div className="col-md-4 text-center">
          All rights reserved.{" "}
          <a
            href="https://github.com/ahmadessawii06"
            target="_blank"
            rel="noreferrer"
            className="text-success"
          >
            Ahmad Essawii
          </a>.
        </div>

        <div className="col-md-4 text-end footer-bottom-links">
          <a href="#">Contact us</a> | <a href="#">Sitemap</a> |{" "}
          <a href="#">Legal disclaimer</a>
        </div>
      </div>

    </footer>
  );
}