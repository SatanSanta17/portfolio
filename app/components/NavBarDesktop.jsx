export default function NavBarDesktop() {
  return (
    <nav
      id="navBarDesktop"
      className="navBar sticky-top d-none d-sm-block navbar navbar-expand-lg mb-1"
    >
      <div className="container-fluid">
        <a className="navbar-brand m-0" href="#home">
          <h1 className="m-0">Burhanuddin Chitalwala</h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav nav-underline mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#aboutMe">About Me</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#myvision">My Vision</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactForm">Let&apos;s Connect!</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
