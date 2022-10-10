import DynamicTable from "../components/DynamicTable";
import useWindowSize from "../hooks/useWindowSize";
import { useMemo } from "react";
import { useGetTeachersQuery } from "../generated/graphql";
import { useEffect, useState } from "react";
import SideBarWithText from "../components/SideBarWithText";

const columns = [
  {
    Header: "Apellido",
    accessor: "name",
  },
  {
    Header: "Nombre",
    accessor: "lastName",
  },
  {
    Header: "Título",
    accessor: "degree",
  },
];

function Docentes() {
  const [active, setActive] = useState(false);
  const { data, loading, error} = useGetTeachersQuery();
  useEffect(() => {
    setActive(true);
  }, []);
  const processedTeachers = useMemo(() => {
    if (!data?.teachers) return [];
    return data.teachers.map((teachers, index) => ({
      name: teachers?.name ?? "",
      lastName: teachers?.lastName ?? "",
      degree: teachers?.degree ?? "",
    }));
  }, [data]);
  const windowSize = useWindowSize();

  return (
    <SideBarWithText>
      <div className="w-100 h-100 btl bg-gray1">
        <div
          className={`ps-10 mw-100 h-full row ${
            (windowSize.width ?? 0) >= 1200 ? "mt-16" : ""
          }`}
        >
          <div className="d-flex col-11 ms-20 mb-5 fw-bold">
            <h4>
              <strong>Lista de Docentes</strong> 
            </h4>
          </div>
          <div className="col-lg-11 col-md-10 mx-auto bg-white rounded border border-2 border-gray4 rounded-5">
            <form className="d-flex justify-content-between my-4" role="search">
              <h5
                className={`col-6 opacity${
                  active ? "active" : ""
                } transitionRight ${active ? "active" : ""}`}
              >
                <input
                  className="col-12 bg-gray2 rounded-5 border-0 p-3 ps-3 fs-5 my-2 ms-15"
                  type="search"
                  placeholder="Buscar Docente"
                  aria-label="Search"
                />
              </h5>
              <select
                className={`bg-gray2 text-gray3 rounded-5 border-0 p-2 fs-5 my-2 me-15 opacity${
                  active ? "active" : ""
                } transitionDown ${active ? "active" : ""}`}
              >
                <option>Filtrar por</option>
                <option>Nombre</option>
                <option>Apellido</option>
              </select>
            </form>
            {error && <div>¡Ocurrio un error!</div>}
            {data?.teachers && !loading && (
              <div
                className="d-flex w-full    rounded border border-0 border-white py-4 rounded-5"
                style={{ height: "32rem" }}
              >
                <DynamicTable columns={columns} data={processedTeachers} />
              </div>
            )}
          </div>
        </div>
      </div>
    </SideBarWithText>
  );
}

export default Docentes;
