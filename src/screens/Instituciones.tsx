import DynamicTable from "../components/DynamicTable";
import Nav from "../components/Nav";
import useWindowSize from "../hooks/useWindowSize";
import { useMemo } from "react";
import { useGetInstitutionsQuery } from "../generated/graphql";
import { useEffect, useState } from "react";
const columns = [
  {
    Header: "Nombre",
    accessor: "name",
  },
  {
    Header: "Dirección",
    accessor: "address",
  },
];

function Instituciones() {
  const [active, setActive] = useState(false);
  const { data, loading, error } = useGetInstitutionsQuery();
  useEffect(() => {
    setActive(true);
  }, []);
  const processedInstitutions = useMemo(() => {
    if (!data?.institutions) return [];
    return data.institutions.map((institution, index) => ({
      id: institution?.idInstitution ?? index,
      name: institution?.name ?? "",
      address: institution?.direction ?? "",
    }));
  }, [data]);
  const windowSize = useWindowSize();

  return (
    <div className="w-100 bg-gray1 pb-4">
      <Nav actualPage="Instituciones" withNavigation />
      <div
        className={`ps-10 mw-100 h-full row ${
          (windowSize.width ?? 0) >= 1200 ? "mt-16" : ""
        }`}
      >
        <div className="col-lg-11 col-md-10 mx-auto bg-white rounded border border-2 shadow rounded-5">
          <div className="d-flex ms-5 mt-4 fw-bold">
            <h4>
              <strong>Lista de instituciones Educativas</strong>
            </h4>
          </div>
          <form className="d-flex justify-content-between my-4" role="search">
            <h5
              className={`col-6 opacity${
                active ? "active" : ""
              } transitionRight ${active ? "active" : ""}`}
            >
              <input
                className="col-12 bg-gray2 rounded-5 border-0  p-3 ps-3 fs-5 my-2 ms-15"
                type="search"
                placeholder="        Buscar institución"
                aria-label="Search"
              />
            </h5>
            <select
              className={`col-1 bg-gray2 text-gray3 rounded-5 border-0 p-2 fs-5 my-2 me-15 opacity${
                active ? "active" : ""
              } transitionDown ${active ? "active" : ""}`}
            >
              <option> Filtrar por </option>
              <option>Nombre</option>
              <option>Dirección</option>
            </select>
          </form>
          {error && <div>¡Ocurrio un error!</div>}
          {data?.institutions && !loading && (
            <a href="/login" style={{ textDecoration: "none" }}><div
              className="d-flex w-full rounded border border-0 border-white py-4 rounded-5"
              style={{ height: "32rem" }} 
            >
             <DynamicTable columns={columns} data={processedInstitutions} /> 
            </div></a>
          )}
        </div>
      </div>
    </div>
  );
}

export default Instituciones;
