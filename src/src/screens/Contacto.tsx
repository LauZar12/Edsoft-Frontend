import Nav from "../components/Nav";
import useWindowSize from "../hooks/useWindowSize";
import ClientService from "../assets/clientService.jpg";
import Ellipse from "../components/Ellipse";
import Contimage from "../assets/ContactDown.png";
import { useEffect, useState } from "react";

function Contacto() {
  const [active, setActive] = useState(false);
  const windowSize = useWindowSize();

  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div
      className="w vh-100 overflow-hidden bg-gray1"
      style={{
        backgroundImage: `url(${ClientService})`,
        backgroundSize: "100vw",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Nav actualPage="Contacto" withNavigation />

      <div
        className={`ps-10 mw-100 row ${
          (windowSize.width ?? 0) >= 1200 ? "mt-3" : ""
        }`}
      >
        <h1
          className={`text-white display-1 text-center fw-bold pt-20 mb-20 opacity${
            active ? "active" : ""
          } transitionDown ${active ? "active" : ""}`}
        >
          Contáctate con Nosotros{" "}
        </h1>
        <h3 className="col-6 mt-0 pt-10">
          <Ellipse width={2700} height={50} />
        </h3>
        <div className="col-lg-8 col-md-12 mx-auto bg-gray1 h-30 p-3 mt-5">
          <div className="col-12 ps-20">
            <div className="d-flex text-left fw-bold">
              <h4
                className={`opacity${active ? "active" : ""} transitionRight ${
                  active ? "active" : ""
                }`}
              >
                SystemPlus (San Marcos - Sucre).
                <br />
                Gilberto Guerrero.
                <br />
                Movil: 3114174048 - 3116935117.
                <br />
                Teléfono : 2954410.
                <br />
                systempluscolombia@hotmail.com
                <div className="fs-5 text-gray4">
                  <br />
                  informacion@edsoft.com <br />
                  informacion@eaduatlantico.com <br /> soporte@edsoft.com <br />
                  soporte@eaduatlantico.com
                </div>
              </h4>
              <div className="w-30 border-end border-3 border-gray4"></div>
              <div className="ms-30">
                <div
                  className={`d-flex ps-5 fw-bold opacity${
                    active ? "active" : ""
                  } transitionLeft ${active ? "active" : ""}`}
                >
                  <h4>
                    Larry José Morales J.
                    <br />
                    Barranquilla - Atlántico <br /> Movil: 3013975504
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
