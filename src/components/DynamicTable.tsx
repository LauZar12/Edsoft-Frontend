import { Column, useTable } from "react-table";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import React, { useEffect, useState } from "react";

type SimpleObject = { [key: string]: string | number | React.ReactNode | null };

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
    <TableContainer component={Paper} className="shadow-none " >
      <Table {...getTableProps()}>
        <TableHead className="shadow-sm ">
          {headerGroups.map((headerGroup) => (
            <TableRow {...headerGroup.getHeaderGroupProps()} >
              {headerGroup.headers.map((column) => (
                <TableCell
                key={column.id}
                  className={`bg-white border-white fs-6 text-primary text-opacity-75 opacity${
                    active ? "active" : ""
                  } transitionUp ${active ? "active" : ""}`}
                >
                  <strong>
                  <u><big className="ms-5 ">{column.render("Header")}</big></u>  
                  </strong>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody
          {...getTableBodyProps()}
          className={` opacity${active ? "active" : ""} transitionLeft ${
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
                    className={`bg-gray1 border-4 border-white rounded-4`}
                  >
                    <strong>
                      <a
                        className="text-black fs-7 ms-7"
                        style={{ textDecoration: "none" }}
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
