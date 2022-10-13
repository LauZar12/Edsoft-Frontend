import useWindowSize from "../hooks/useWindowSize";
import Background from "../assets/background.png";
import Logo from "../assets/institucion2logo@2x.png";
import SideBar from "../components/SideBar";
import { useEffect, useState } from "react";
import Wpp from "../assets/01wpp.png";
import Msg from "../assets/02msg.png";

function AdminPrincipal() {
  const [active, setActive] = useState(false);
  const windowSize = useWindowSize();
  useEffect(() => {
    setActive(true);
  }, []);
  return (
    <div
      className="d-flex w-80 vh-100 overflow-hidden bg-gray1"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "100vw",
        backgroundRepeat: "round",
      }}
    >
      <SideBar />
      <div
        className={`col-12 h-50 row justify-content-center ${
          (windowSize.width ?? 0) >= 1200 ? "mt-3" : ""
        }`}
      >
        <div className={`col-lg-1 h-5 mt-5 ms-81`}>
          <a className="rounded-3 border-gray3 flex-column ps-36 ms-81 fs-4 mt-10 h-20"></a>
          <img className="bg-white rounded-circle " src={Logo} />
        </div>
        <div className={"text-white display-1  fw-bold mt-36 pt-10"}>
          <p
            className={`me-25 mt-5 text-center opacity${
              active ? "active" : ""
            } transitionDown ${active ? "active" : ""}`}
          >
            <big><big><big className="me-20">Bienvenido</big></big></big>
            <div className={`col-lg-1 h-5 ps-25 ms-81`}>
              <a className="rounded-3 border-gray3 flex-column ps-36 ms-81 fs-4 col-lg-8"></a>
              <a
                className="ms-64 border-transparent ms-81 ps-81 rounded-5 btn mx-auto"
                href=""
              >
                <img className={`h-14 w-15 mb-10`} src={Wpp} />
              </a>
            </div>
            <div className={`col-lg-1 h-5 mt-5 ps-25 ms-81`}>
              <a className="rounded-3 border-gray3 flex-column ps-36 ms-81 fs-4 mt-10 col-lg-10 h-20"></a>
              <a
                className="ms-64 border-transparent ps-81 ms-81 rounded-5 btn mx-auto"
                href=""
              >
                <img className={`h-13 w-14 mt-10`} src={Msg} />
              </a>
            </div>
            <p
              className={`text-gray4 fs-4 me-20 opacity${
                active ? "active" : ""
              } transitionRight ${active ? "active" : ""}`}
            >
              La mejor forma de gestionar su colegio.
            </p>
            <a
              className="col-lg-1 rounded border ms-50 rounded-5 btn btn-outline-secondary mb-15 align-text-middle me-25"
              href="/configuracion"
            >
              Comenzar  
            </a>
          </p>
        </div>
        <h3
          className={`text-gray3 position-relative mt-30 fs-5 me-15 text-center opacity${
            active ? "active" : ""
          } transitionUp ${active ? "active" : ""}`}
        >
          Resolución de aprobación 0683 de nov. 08 de 2002 emanada por la
          Secretaría de Educación el Derecho 1290 del año 2009 y el decreto
          Nro.1075 del año 2015 <br /> CÓDIGO DANE: 170708000038 <br /> Cra. 28
          calle 22 - Barrio: Primero de Junio - Teléfóno: 2954198
        </h3>
      </div>
    </div>
  );
}
export default AdminPrincipal;
