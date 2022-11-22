import useWindowSize from "../hooks/useWindowSize";
//import { useLoginMutation } from '../generated/graphql';
import { useEffect, useState } from "react";
import SideBarWithText from "../components/SideBarWithText";

function Instituciones() {
  //const [LoginMutation, {data, loading, error}] = useLoginMutation();
  //const [password, setPassword] = useState('');
  const windowSize = useWindowSize();
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <SideBarWithText location = {"Configuracion"} sublocation = {"Cambiar Contraseña"}>
      <div className="btl w-100 h-100 overflow-hidden bg-gray1 pb-4">
      <h1
          className={`text-black fs-2 fw-bold ms-30 mt-10 opacity${
            active ? "active" : ""
          } transitionDown ${active ? "active" : ""}`}
        >
          Cambiar Contraseña
        </h1>
        <div className="col-lg-10 ms-20 bg-white align-text-middle rounded border-gray4 py-4 row rounded-5 shadow-sm h-70 p-3 mt-0">
          <h1 className={`text-black me-20 ms-48 fs-4 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Contraseña actual
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-40 fs-4 mt-10 col-lg-4`}
            />
          </h1>
          <h2 className={`text-black fs-4 ms-48 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Nueva Contraseña{" "}
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-36 fs-4 mt-5 col-lg-4 `}
            />
          </h2>
          <h3 className={`text-black fs-4 ms-48 opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Confirme Contraseña
            <input
              className={`bg-white rounded border rounded-3 border-gray4 ps-6 ms-30 fs-4 mt-5 mb-5 col-lg-4`}
            />
          </h3>
          <button
            type="button"
            className={`btn bg-blue3 btn-primary rounded-5 pl-4 ml-4 mx-auto col-lg-2 h-15 mb-4 opacity${active ? "active" : ""} transitionUp ${active ? "active" : ""}`}
          >
            <h4 className={`text-white pt-2`}>Guardar</h4>
          </button>
        </div>
        </div>
    </SideBarWithText>
  );
}

export default Instituciones;
