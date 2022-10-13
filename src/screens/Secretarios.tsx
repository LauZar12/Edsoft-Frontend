import DynamicTable from "../components/DynamicTable";
import useWindowSize from "../hooks/useWindowSize";
import { useMemo } from "react";
import { useGetInstitutionsQuery } from "../generated/graphql";
import { useEffect, useState } from "react";
import SideBarWithText from "../components/SideBarWithText";

const columns = [
  {
    Header: "ApellidoSecre",
    accessor: "name",
  },
  {
    Header: "NombreSecre",
    accessor: "address",
  },
  {
    Header: "Id",
    accessor: "id",
  },
];

function Secretarios() {
  const [active, setActive] = useState(false);
  const { data, loading, error } = useGetInstitutionsQuery();
  useEffect(() => {
    setActive(true);
  }, []);
  const processedSecretarios = useMemo(() => {
    if (!data?.institutions) return [];
    return data.institutions.map((institution, index) => ({
      id: institution?.idInstitution ?? index,
      name: institution?.name ?? "",
      address: institution?.direction ?? "",
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
          <div className="d-flex col-11 ms-15 fw-bold">
            <strong className="fs-4 ms-10 me-81 pe-20">Lista de Secretarios</strong>
            <button
              type="button"
              className="btn bg-blue3 btn-primary ms-81 w-64 mb-0 pb-0 h-10 btl btr "
            >
              <a>
                <h4 className="text-white fs-5">+ Nuevo Secretario</h4>
              </a>
            </button>
          </div>
          <div className="col-lg-11 col-md-10 mx-auto bg-white rounded border border-2 shadow rounded-5">
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
            {data?.institutions && !loading && (
              <div
                className="d-flex w-full  rounded border border-0 border-white py-4 rounded-5"
                style={{ height: "32rem" }}
              >
                <DynamicTable columns={columns} data={processedSecretarios} />
              </div>
            )}
          </div>
        </div>
      </div>
    </SideBarWithText>
  );
}

export default Secretarios;
