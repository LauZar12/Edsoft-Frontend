import Ellipse from "../components/Ellipse";
import Nav from "../components/Nav";
import InicioImagen from "../assets/InicioImagen.png";
import useWindowSize from "../hooks/useWindowSize";
import { useEffect, useState } from "react";

function Inicio() {
  const [active, setActive] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="w-100 vh-100 overflow-hidden bg-gray1">
      <Nav actualPage="Inicio" withNavigation />
      <div
        className={`ps-10 mw-100 row ${
          (windowSize.width ?? 0) >= 1200 ? "mt-3" : ""
        }`}
      >
        <div className="col-6 mt-20 ">
          <h5
            className={`text-gray3 fs-4 ms-4 opacity${
              active ? "active" : ""
            } transitionRight ${active ? "active" : ""}`}
          >
            <Ellipse width={40} height={40} />
            ¡Bienvenido!
          </h5>
          <div className="pt-20 pb-20">
            <div className="w-100 border-end border-3 border-gray4 pb-12 pe-4">
              <h2
                className={`display-2 fw-bold mb-6 opacity${
                  active ? "active" : ""
                } transitionUp ${active ? "active" : ""}`}
              >
                <span className={"text-main-blue"}>Crea| </span>
                <span className="text-gray3">
                  gestiona
                  <br /> y publica calificaciones
                </span>
              </h2>
              <p
                className={`text-gray3 fs-3 ms-2 opacity${
                  active ? "active" : ""
                } transitionRight ${active ? "active" : ""}`}
              >
                Acceder a <span className="text-black">toda</span> la
                información institucional, académica, administrativa, financiera
                y cultural de la Institución educativa sobre asignaturas,
                horarios de clases, datos generales de la institución como{" "}
                <span className="text-black">
                  eventos, talleres, jornadas pedagógicas, etc.
                </span>
              </p>
            </div>
            <p className="text-gray3 mt-10">Copyright @ 2022 <br />Desarrollado por Laura Zárate</p>
          </div>
        </div>
        <div
          className={`col-6 opacity${active ? "active" : ""} transitionLeft ${
            active ? "active" : ""
          }`}
        >
          <div className="d-flex mt-0">
            <img
              src={InicioImagen}
              alt="Interactive Tablet"
              className="img-fluid align-self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
