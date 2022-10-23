import useWindowSize from "../hooks/useWindowSize";
//import { useLoginMutation } from '../generated/graphql';
import { useEffect, useState } from "react";
import SideBarWithText from "../components/SideBarWithText";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";

function CopyYear() {
  const windowSize = useWindowSize();
  const [active, setActive] = useState(false);
  useEffect(() => { 
    setActive(true);
  }, []);

  return (
    <SideBarWithText location = {"Progreso Actual"} sublocation = {"Copiar Año Anterior"}>
      <div className="btl w-100 h-100 overflow-hidden bg-gray1 pb-4">
      <h1
          className={`text-black fs-2 fw-bold ms-30 mt-10 opacity${
            active ? "active" : ""
          } transitionDown ${active ? "active" : ""}`}
        >
          Copiar Año Anterior
        </h1>
        <div className="col-lg-10 ms-20 bg-white align-text-middle rounded border-gray4 py-4 row rounded-5 shadow-sm h-70 p-3 mt-0">
          <h1 className={`text-black mt-3 me-20 ps-48 ms-48 fs-4 mx-auto opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Asignaturas
            <FormControlLabel className="ms-48 ps-5" control={<Switch defaultChecked />} label="" />
          </h1>
          <h1 className={`text-black me-20 ps-48 ms-48 fs-4 mx-auto opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Recomendaciones
            <FormControlLabel className="ms-36 ps-2" control={<Switch defaultChecked />} label="" />
          </h1>
          <h1 className={`text-black me-20 ps-48 ms-48 fs-4 mx-auto opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Logros{' '}
            <FormControlLabel className="ms-45 ps-21" control={<Switch defaultChecked />} label="" />
          </h1>
          <h1 className={`text-black me-20 ps-48 ms-48 fs-4 mx-auto opacity${active ? "active" : ""} transitionLeft ${active ? "active" : ""}`}>
            Indicadores de Logros
            <FormControlLabel className="ms-27" control={<Switch defaultChecked />} label="" />
          </h1>
          <button
            type="button"
            className={`btn bg-blue3 btn-primary rounded-5 pl-4 ml-4 mx-auto col-lg-2 h-15 mb-4 opacity${active ? "active" : ""} transitionUp ${active ? "active" : ""}`}
          >
            <h4 className={`text-white pt-2`}>Generar Copia</h4>
          </button>
        </div>
        </div>
    </SideBarWithText>
  );
}

export default CopyYear;
