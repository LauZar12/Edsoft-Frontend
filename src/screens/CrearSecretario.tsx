import useWindowSize from "../hooks/useWindowSize";
import { useEffect, useState } from "react";
import SideBarWithText from "../components/SideBarWithText";

function CrearSecretario() {
  const windowSize = useWindowSize();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <SideBarWithText location = {"Funcionarios"} sublocation = {"Secretarios (Crear Secretario)"}>
      <div className="btl w-100 h-100 overflow-hidden bg-gray1 pb-4">
      <h1
          className={`text-black fs-2 fw-bold ms-30 mt-10 opacity${
            active ? "active" : ""
          } transitionDown ${active ? "active" : ""}`}
        >
          Crear Secretario
        </h1>
        <div className="col-lg-10 ms-20 bg-white align-text-middle rounded border-gray4 py-4 row rounded-5 shadow-sm h-70 p-3 mt-0">
          <p className={`text-black fs-4 ms-48 mb-1 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Apellidos
            &nbsp;&nbsp;
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-56 fs-4 mt-5 col-lg-4 p-0`}
            />
          </p>
          <p className={`text-black fs-4 ms-48 mb-1 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Nombres
            &nbsp;&nbsp;
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-56 fs-4 mt-5 col-lg-4 p-0`}
            />
          </p>
          <h2 className={`text-black fs-4 ms-48 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Tipo de Identificación{" "}
            <select
              className={`bg-white text-black rounded-3 border ps-4 ms-28 fs-4 mt-5 col-lg-4 pt-1 pb-1 ${
                active ? "active" : ""
              } transitionDown ${active ? "active" : ""}`}
            >
              <option>Cédula de Ciudadanía</option>
              <option>Tarjeta de Identidad</option>
              <option>Pasaporte</option>
            </select>
          </h2>
          <p className={`text-black fs-4 ms-48 mb-1 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Número de Identificación{" "}
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-18 fs-4 mt-4 col-lg-4 p-0`}
            />
          </p>
          <p className={`text-black fs-4 ms-48 mb-1 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Teléfono
            &nbsp;&nbsp;&nbsp;
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-56 fs-4 mt-5 col-lg-4 `}
            />
          </p>
          <p className={`text-black fs-4 ms-48 mb-1 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Dirección
            &nbsp;&nbsp;
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-56 fs-4 mt-5 col-lg-4 `}
            />
          </p>
          <p className={`text-black fs-4 ms-48 mb-1 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Email
            &nbsp;&nbsp;&nbsp;
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-64 fs-4 mt-5 col-lg-4 mb-5 `}
            />
          </p>
          <button
            type="button"
            className={`btn bg-blue3 btn-primary rounded-5 pl-4 ml-4 mx-auto col-lg-3 h-15 mb-4 opacity${active ? "active" : ""} transitionUp ${active ? "active" : ""}`}
          >
            <h4 className={`text-white pt-2`}>Crear Secretario</h4>
          </button>
        </div>
      </div>
    </SideBarWithText>
  );
}

export default CrearSecretario;
