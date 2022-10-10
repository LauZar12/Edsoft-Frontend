import BigLogo from "../assets/logo@2x.png";

interface NavProps {
  actualPage: "Inicio" | "Instituciones" | "Contacto";
  withNavigation?: boolean;
}

function Nav(
  { actualPage, withNavigation }: NavProps = {
    actualPage: "Inicio",
    withNavigation: true,
  }
) {
  return (
    <nav className="navbar navbar-expand-lg px-20 pt-0">
      <div className="container-fluid">
        <a className="ms-10 navbar-brand d-flex align-items-center" href="/">
          <img
            src={BigLogo}
            alt="Logo EdSoft"
            className="d-inline-block w-16 h-16 align-text-top"
          />
          <h3 className="align-middle mx-2 display-4 fw-bold">EdSoft</h3>
        </a>
        {withNavigation && (
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto mb-2 fs-3 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    actualPage === "Inicio" && "active"
                  } mx-5`}
                  aria-current="page"
                  href="/"
                >
                  Inicio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    actualPage === "Instituciones" && "active"
                  } mx-5`}
                  aria-current="page"
                  href="/instituciones"
                >
                  Lista de Inst. Educativas
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    actualPage === "Contacto" && "active"
                  } mx-5`}
                  aria-current="page"
                  href="/contacto"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
