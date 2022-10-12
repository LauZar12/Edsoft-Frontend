import React, { FC, JSXElementConstructor, ReactElement, ReactFragment, ReactNode, ReactPortal } from "react";
import Logo from "../assets/logo@2x.png";
import { useEffect, useState } from "react";
import icon1 from "../assets/1icon.jpg";
import icon2 from "../assets/2icon.jpg";
import icon3 from "../assets/3icon.jpg";
import icon4 from "../assets/4icon.jpg";
import icon5 from "../assets/5icon.jpg";

interface SideBarWithTextProps {
  children: ReactNode;
}


const SideBarWithText: FC<SideBarWithTextProps> = ({ children }) => {

  const [openFuncionarios, setOpenFuncionarios] = useState(false);

  const [openProgActual, setOpenProgActual] = useState(false);
  const [openProgAcademico, setOpenProgAcademico] = useState(false);
  const [openReportes, setOpenReportes] = useState(false);

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
          Institución Educativa San Marcos {">"} Configuración
        </div>
      </div>
      <div className="d-flex" style={{ height: "calc(100% - 6rem)" }}>
        <div className={`w-20p bg-blue3`}>
          <div className={`d-flex align-items-center justify-content-center flex-column opacity${
            active ? "active" : ""
          } transitionRight  ${active ? "active" : ""} `}>
            <div className="mb-2 me-20 text-white mt-25">
              <p className="fs-5">
                <img src={icon1}   className="h-18 w-19" />
                Configuración
              </p>
            </div>
            <div className="aling-content-right">
              
              <div className="mb-4 text-white rounded-start mt-8"  onClick={()=>{setOpenFuncionarios(!openFuncionarios);setOpenProgAcademico(false);setOpenProgActual(false);setOpenReportes(false)}}>
                <p className="text-white fs-5 rounded-start">
                  <img src={icon2} className="w-15 h-14" />

                  <button className='text-white menu-trigger border-transparent btn-primary-outline'>
                    Funcionarios
                  </button>

                  {openFuncionarios&&(<>
                    <DropdownItem text = {'Docentes'} href = {'/docentes'}/>
                    <DropdownItem text = {'Secretarios'} href = {'/secretarios'}/>
                  </>)}
                  
                 </p>
              </div>

              <div className="mb-4 text-white rounded-start mt-15" onClick={()=>{setOpenProgActual(!openProgActual);setOpenFuncionarios(false);setOpenProgAcademico(false);setOpenReportes(false)}}>
                <p className="text-white rounded-start fs-5">
                  <img src={icon3} className="w-15 h-14" />

                  <button className='text-white menu-trigger border-transparent btn-primary-outline'>
                    Progreso Actual
                  </button>

                  {openProgActual&&(<>
                    <DropdownItem text = {'Tipo de Calificación'} href = {'/docentes'}/>
                    <DropdownItem text = {'Establecer Año'} href = {'/docentes'}/>
                    <DropdownItem text = {'Copiar Año Anterior'} href = {'/docentes'}/>
                    <DropdownItem text = {'Crear Cursos'} href = {'/docentes'}/>
                    <DropdownItem text = {'Area'} href = {'/docentes'}/>
                    <DropdownItem text = {'Asignatura'} href = {'/docentes'}/>
                    <DropdownItem text = {'Horario'} href = {'/docentes'}/>
                    <DropdownItem text = {'Logros'} href = {'/docentes'}/>
                    <DropdownItem text = {'Matrículas'} href = {'/docentes'}/>
                    <DropdownItem text = {'Costos'} href = {'/docentes'}/>
                  </>)}

                </p>
              </div>

              <div className="mb-4 text-white rounded-start mt-15"  onClick={()=>{setOpenProgAcademico(!openProgAcademico);setOpenFuncionarios(false);setOpenProgActual(false);setOpenReportes(false)}}>
                <p className="text-white rounded-start fs-5">
                  <img src={icon4} className="w-14 h-14 me-1" />

                  <button className='text-white menu-trigger border-transparent btn-primary-outline'>
                    Progreso Académico
                  </button>

                  {openProgAcademico&&(<>
                    <DropdownItem text = {'Calificación'} href = {'/docentes'}/>
                    <DropdownItem text = {'Cursos Especiales'} href = {'/docentes'}/>
                    <DropdownItem text = {'Gest. Estudiantes'} href = {'/docentes'}/>
                  </>)}

                </p>
              </div>

              <div className="mb-4 text-white rounded-start mt-15" onClick={()=>{setOpenReportes(!openReportes);setOpenFuncionarios(false);setOpenProgActual(false);setOpenProgAcademico(false)}}>
                <p className="fs-5">
                  <img src={icon5} className="w-14 h-14 me-1" />

                  <button className='text-white menu-trigger border-transparent btn-primary-outline'>
                    Reportes
                  </button>

                  {openReportes&&(<>
                    <DropdownItem text = {'Indicadores'} href = {'/docentes'}/>
                    <DropdownItem text = {'Planillas'} href = {'/docentes'}/>
                    <DropdownItem text = {'Listados'} href = {'/docentes'}/>
                    <DropdownItem text = {'Entregables'} href = {'/docentes'}/>
                  </>)}

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

function DropdownItem(props: { href: string | undefined; text: React.ReactNode; }){

  const [active, setActive] = useState(false);

  useEffect(() => {
    setActive(true);
  }, []);

  return(
    <div className={`ms-9 ps-8 opacity${active ? "active" : ""} transitionDown ${active ? "active" : ""}`}>
      <a className='stretched-link mb-4 text-white rounded-start mt-8' href={props.href}>
        {props.text}
      </a>
    </div>
  );
}


export default SideBarWithText;
