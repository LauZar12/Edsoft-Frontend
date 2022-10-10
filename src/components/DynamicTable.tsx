import { Column, useTable } from "react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";

type SimpleObject = { [key: string]: string | number | JSX.Element | null };

interface DynamicTableProps {
  columns: Column<SimpleObject>[];
  data: SimpleObject[];
  filter?: string | null;
}

function DynamicTable({ columns, data }: DynamicTableProps) {
  const [active, setActive] = useState(false);
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  useEffect(() => {
    setActive(true);
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table {...getTableProps()}>
        <TableHead>
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <TableCell>
                  <strong>
                    <big>{column.render("Header")}</big>
                  </strong>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody
          {...getTableBodyProps()}
          className={`opacity${active ? "active" : ""} transitionLeft ${
            active ? "active" : ""
          }`}
        >
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow key={row.id}>
                {row.cells.map((cell) => (
                  <TableCell
                    {...cell.getCellProps()}
                    className={`bg-gray2 border-3 border-gray2 rounded-4`}
                  >
                    <strong>
                      <a
                        className="text-black"
                        style={{ textDecoration: "none" }}
                        href="/login"
                      >
                        {" "}
                        {cell.render("Cell")}
                      </a>
                    </strong>
                  </TableCell>
                ))}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DynamicTable;
