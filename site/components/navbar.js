import Link from "next/link";
import GluestickLogo from "../assets/img/gluestick.svg";

const Navbar = (props) => {
  return (
    <div className="navbar-container bg-light">
      <nav className="navbar navbar-expand-lg navbar-light" data-sticky="top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand navbar-brand-dynamic-color fade-page">
              <GluestickLogo className="header-logo"/>
            </a>
          </Link>
          <div className="d-flex align-items-center order-lg-3">
            <a
              href="https://github.com/hotgluexyz/gluestick"
              className="btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3"
            >
              View on GitHub
            </a>
          </div>
          <div
            className="collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end"
            id="navigation-menu"
          >
            <ul className="navbar-nav my-3 my-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link nav-item"
                  href="https://docs.gluestick.xyz"
                  role="button"
                >
                  Docs
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
