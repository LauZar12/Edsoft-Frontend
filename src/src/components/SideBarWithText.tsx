import { FC, ReactNode } from "react";
import Logo from "../assets/logo@2x.png";
import { useEffect, useState } from "react";
import icon1 from "../assets/1icon.jpg";
import icon2 from "../assets/2icon.jpg";
import icon3 from "../assets/3icon.jpg";
import icon4 from "../assets/4icon.jpg";
import icon5 from "../assets/5icon.jpg";

interface SideBarWithTextProps {
  children: ReactNode;
  location: string;
}


const SideBarWithText: FC<SideBarWithTextProps> = ({ children, location }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <div className="vw-100 vh-100">
      <div className={`d-flex flex-row w-100 h-24 bg-blue3 p-2 `}>
        <div className="w-20p">
          <a
            className="navbar-brand d-flex align-items-center mx-3 col-xlg-5 w"
            href="/bienvenido"
          >
            <img
              src={Logo}
              alt="Logo EdSoft"
              className="d-inline-block w-18 h-18 align-text-middle m-3"
            />
            <h3 className="align-middle mx-2 fs-1 fw-bold">EduSucre</h3>
          </a>
        </div>
        <div
          className={`d-flex justify-content-center flex-column ms-20 opacity${
            active ? "active" : ""
          } transitionLeft ${active ? "active" : ""}`}
        >
         {location} 
        </div>
      </div>
      <div className="d-flex" style={{ height: "calc(100% - 6rem)" }}>
        <div className={`w-20p bg-blue3`}>
          <div className={`d-flex align-items-center justify-content-center flex-column opacity${
            active ? "active" : ""
          } transitionRight  ${active ? "active" : ""} `}>
            <div className="mb-2 me-20 text-white mt-25">
              <p className="fs-5">
                <img src={icon1}   className="h-18 w-18" />
                Configuración
              </p>
            </div>
            <div className="aling-content-right">
              <div className="mb-4 text-white rounded-start mt-8">
                <p className="text-white fs-5 rounded-start">
                  <img src={icon2} className="w-16 h-14" />
                  <select className="bg-blue3 border-blue3">
                    <option>Funcionarios</option>
                    <option>Docentes</option>
                    <option>Secretarios</option>
                    </select>
                </p>
              </div>
              <div className="mb-4 text-white rounded-start mt-15">
                <p className="text-white rounded-start fs-5">
                  <img src={icon3} className="w-16 h-14" />
                  <select className="bg-blue3 ">
                    <option>Prog. Actual</option>
                    <option>Tipo de Calificación</option>
                    <option>Establecer Año</option>
                    <option>Copiar Año Anterior</option>
                    <option>Crear Cursos</option>
                    <option>Area </option>
                    <option>Asignatura</option>
                    <option>Horario</option>
                    <option>Logros</option>
                    <option>Matriculas</option>
                    <option>Costos</option>
                    </select>
                </p>
              </div>
              <div className="mb-4 text-white rounded-start mt-15">
                <p className="text-white rounded-start fs-5">
                  <img src={icon4} className="w-14 h-14 me-1" />
                  <select className="bg-blue3 ">
                    <option>P. Académico</option>
                    <option>Calificación</option>
                    <option>Cursos Especiales</option>
                    <option>Gest. Estudiantes</option>
                    </select>
                </p>
              </div>
              <div className="mb-4 text-white rounded-start mt-15">
                <p className="fs-5">
                  <img src={icon5} className="w-14 h-14 me-1" />
                  <select className="bg-blue3 ">
                    <option>Reportes</option>
                    <option>Indicadores</option>
                    <option>Planillas</option>
                    <option>Listados</option>
                    <option>Entregables</option>
                    </select>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-80p bg-blue3">{children}</div>
      </div>
    </div>
  );
};


export default SideBarWithText;
